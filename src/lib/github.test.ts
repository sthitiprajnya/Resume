import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchGitHubStats } from '@/lib/github';

describe('github.ts', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('fetches fresh data and stores in cache', async () => {
    globalThis.fetch = vi.fn().mockImplementation((url) => {
      if (url.includes('/users/')) {
        if (url.includes('/repos')) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve([
              { name: 'repo1', stargazers_count: 5, forks_count: 2, language: 'Python', html_url: 'http://' },
              { name: 'repo2', stargazers_count: 10, forks_count: 1, language: 'Python', html_url: 'http://' },
              { name: 'repo3', stargazers_count: 1, forks_count: 0, language: 'JavaScript', html_url: 'http://' },
            ]),
          });
        }
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ followers: 10, public_repos: 5 }),
        });
      }
    });

    const stats = await fetchGitHubStats();
    expect(stats.followers).toBe(10);
    expect(stats.totalStars).toBe(16);
    expect(stats.languages.Python).toBe(2);
    expect(stats.topRepos[0].name).toBe('repo2');

    const cached = JSON.parse(localStorage.getItem('github_stats_cache') || '{}');
    expect(cached.followers).toBe(10);
  });

  it('returns cached data if fresh', async () => {
    const freshCache = {
      followers: 99,
      publicRepos: 99,
      totalStars: 99,
      totalForks: 99,
      languages: {},
      topRepos: [],
      fetchedAt: Date.now(),
    };
    localStorage.setItem('github_stats_cache', JSON.stringify(freshCache));

    globalThis.fetch = vi.fn(); // Should not be called

    const stats = await fetchGitHubStats();
    expect(stats.followers).toBe(99);
    expect(globalThis.fetch).not.toHaveBeenCalled();
  });
});