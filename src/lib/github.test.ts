import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchGitHubStats, GitHubStats, GitHubApiRepo } from './github';

const MOCK_USER_RESPONSE = {
  followers: 42,
  public_repos: 12,
};

const MOCK_REPOS_RESPONSE: GitHubApiRepo[] = [
  {
    name: 'repo-1',
    description: 'desc 1',
    stargazers_count: 10,
    forks_count: 5,
    language: 'TypeScript',
    html_url: 'https://github.com/user/repo-1',
  },
  {
    name: 'repo-2',
    description: null,
    stargazers_count: 20,
    forks_count: 2,
    language: 'Python',
    html_url: 'https://github.com/user/repo-2',
  },
  {
    name: 'repo-3',
    description: 'desc 3',
    stargazers_count: 5,
    forks_count: 1,
    language: 'TypeScript',
    html_url: 'https://github.com/user/repo-3',
  },
  {
    name: 'repo-4',
    description: 'desc 4',
    stargazers_count: 50,
    forks_count: 10,
    language: 'Rust',
    html_url: 'https://github.com/user/repo-4',
  },
];

describe('fetchGitHubStats', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    // Reset window just in case
    vi.unstubAllGlobals();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return fallback data if window is undefined', async () => {
    vi.stubGlobal('window', undefined);

    const result = await fetchGitHubStats();

    expect(result.followers).toBe(0); // Fallback data follower count
    expect(result.publicRepos).toBe(10); // Fallback data publicRepos count
  });

  it('should return cached data if it exists and is within TTL', async () => {
    const cachedData: GitHubStats = {
      followers: 100,
      publicRepos: 20,
      totalStars: 50,
      totalForks: 10,
      languages: { JavaScript: 1 },
      topRepos: [],
      fetchedAt: Date.now() - 1000, // 1 second ago, well within TTL
    };

    localStorage.setItem('github_stats_cache', JSON.stringify(cachedData));

    const fetchSpy = vi.spyOn(global, 'fetch');

    const result = await fetchGitHubStats();

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(result).toEqual(cachedData);
  });

  it('should fetch new data if cache is expired', async () => {
    const expiredData: GitHubStats = {
      followers: 100,
      publicRepos: 20,
      totalStars: 50,
      totalForks: 10,
      languages: { JavaScript: 1 },
      topRepos: [],
      fetchedAt: Date.now() - (60 * 60 * 1000 + 1000), // 1 hour + 1 second ago (expired)
    };

    localStorage.setItem('github_stats_cache', JSON.stringify(expiredData));

    const fetchSpy = vi.spyOn(global, 'fetch').mockImplementation(async (url) => {
      if (url.toString().includes('/repos')) {
        return new Response(JSON.stringify(MOCK_REPOS_RESPONSE), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
      return new Response(JSON.stringify(MOCK_USER_RESPONSE), { status: 200, headers: { 'Content-Type': 'application/json' } });
    });

    const result = await fetchGitHubStats();

    expect(fetchSpy).toHaveBeenCalledTimes(2);
    expect(result.followers).toBe(42);

    // Check if cache was updated
    const newCache = JSON.parse(localStorage.getItem('github_stats_cache') || '{}');
    expect(newCache.followers).toBe(42);
  });

  it('should calculate stats and return correct data on happy path', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch').mockImplementation(async (url) => {
      if (url.toString().includes('/repos')) {
        return new Response(JSON.stringify(MOCK_REPOS_RESPONSE), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
      return new Response(JSON.stringify(MOCK_USER_RESPONSE), { status: 200, headers: { 'Content-Type': 'application/json' } });
    });

    const result = await fetchGitHubStats();

    expect(fetchSpy).toHaveBeenCalledTimes(2);

    expect(result.followers).toBe(42);
    expect(result.publicRepos).toBe(12);
    expect(result.totalStars).toBe(85); // 10 + 20 + 5 + 50
    expect(result.totalForks).toBe(18); // 5 + 2 + 1 + 10
    expect(result.languages).toEqual({
      TypeScript: 2,
      Python: 1,
      Rust: 1,
    });

    // Should have top 3 repos sorted by stars (50, 20, 10)
    expect(result.topRepos).toHaveLength(3);
    expect(result.topRepos[0].name).toBe('repo-4');
    expect(result.topRepos[1].name).toBe('repo-2');
    expect(result.topRepos[2].name).toBe('repo-1');
  });

  it('should return fallback data on API error (non-ok response)', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch').mockImplementation(async (url) => {
      if (url.toString().includes('/repos')) {
        return new Response('Not Found', { status: 404 });
      }
      return new Response(JSON.stringify(MOCK_USER_RESPONSE), { status: 200, headers: { 'Content-Type': 'application/json' } });
    });

    const result = await fetchGitHubStats();

    expect(fetchSpy).toHaveBeenCalledTimes(2);
    expect(result.followers).toBe(0); // Fallback data
  });

  it('should return fallback data on network exception', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network failure'));

    const result = await fetchGitHubStats();

    expect(fetchSpy).toHaveBeenCalledTimes(2);
    expect(result.followers).toBe(0); // Fallback data
  });
});
