const NUM_REPOS = 10000;
const repos = Array.from({ length: NUM_REPOS }, () => ({
    stargazers_count: Math.floor(Math.random() * 100),
    forks_count: Math.floor(Math.random() * 50),
    language: ['TypeScript', 'Python', 'JavaScript', null][Math.floor(Math.random() * 4)]
}));

function baseline() {
    const totalStars = repos.reduce((sum: number, r: any) => sum + r.stargazers_count, 0);
    const totalForks = repos.reduce((sum: number, r: any) => sum + r.forks_count, 0);
    const languages  = repos.reduce((acc: Record<string,number>, r: any) => {
      if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
      return acc;
    }, {});
    return { totalStars, totalForks, languages };
}

function optimized() {
    let totalStars = 0;
    let totalForks = 0;
    const languages: Record<string, number> = {};

    for (let i = 0; i < repos.length; i++) {
        const r = repos[i];
        totalStars += r.stargazers_count;
        totalForks += r.forks_count;
        if (r.language) {
            languages[r.language] = (languages[r.language] || 0) + 1;
        }
    }
    return { totalStars, totalForks, languages };
}

function runBenchmark() {
    const iterations = 10000;

    // warm up
    for(let i=0; i<100; i++) {
        baseline();
        optimized();
    }

    const startBaseline = performance.now();
    for(let i=0; i<iterations; i++) {
        baseline();
    }
    const endBaseline = performance.now();

    const startOptimized = performance.now();
    for(let i=0; i<iterations; i++) {
        optimized();
    }
    const endOptimized = performance.now();

    console.log(`Baseline: ${endBaseline - startBaseline} ms`);
    console.log(`Optimized: ${endOptimized - startOptimized} ms`);
}

runBenchmark();
