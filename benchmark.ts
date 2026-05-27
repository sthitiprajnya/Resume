const NUM_REPOS = 10000;
const repos = Array.from({ length: NUM_REPOS }, () => ({
    stargazers_count: Math.floor(Math.random() * 100),
    forks_count: Math.floor(Math.random() * 50),
    language: ['TypeScript', 'Python', 'JavaScript', null][Math.floor(Math.random() * 4)]
}));

function baselineRepos() {
    const totalStars = repos.reduce((sum: number, r: any) => sum + r.stargazers_count, 0);
    const totalForks = repos.reduce((sum: number, r: any) => sum + r.forks_count, 0);
    const languages  = repos.reduce((acc: Record<string,number>, r: any) => {
      if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
      return acc;
    }, {});
    return { totalStars, totalForks, languages };
}

function optimizedRepos() {
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

const NUM_PARTICLES = 1800;
const positions = new Float32Array(NUM_PARTICLES * 3);
const velocities = new Float32Array(NUM_PARTICLES * 3);
const radius = 180;
const radiusSq = radius * radius;

// Fill with some data
for(let i=0; i<NUM_PARTICLES*3; i++) {
    positions[i] = (Math.random() - 0.5) * 400;
    velocities[i] = (Math.random() - 0.5) * 0.2;
}

function baselineParticles() {
    for (let i = 0; i < NUM_PARTICLES; i++) {
        const idx = i * 3;
        positions[idx] += velocities[idx];
        positions[idx+1] += velocities[idx+1];
        positions[idx+2] += velocities[idx+2];
        const px = positions[idx];
        const py = positions[idx+1];
        const pz = positions[idx+2];
        const distToCenter = Math.sqrt(px*px + py*py + pz*pz);
        if (distToCenter > radius) {
            positions[idx] = -px * 0.99;
            positions[idx+1] = -py * 0.99;
            positions[idx+2] = -pz * 0.99;
        }
    }
}

function optimizedParticles() {
    for (let i = 0; i < NUM_PARTICLES; i++) {
        const idx = i * 3;
        positions[idx] += velocities[idx];
        positions[idx+1] += velocities[idx+1];
        positions[idx+2] += velocities[idx+2];
        const px = positions[idx];
        const py = positions[idx+1];
        const pz = positions[idx+2];
        const distToCenterSq = px*px + py*py + pz*pz;
        if (distToCenterSq > radiusSq) {
            positions[idx] = -px * 0.99;
            positions[idx+1] = -py * 0.99;
            positions[idx+2] = -pz * 0.99;
        }
    }
}

function runBenchmark() {
    const iterations = 10000;

    console.log("--- Repo Stats Benchmark ---");
    // warm up
    for(let i=0; i<100; i++) {
        baselineRepos();
        optimizedRepos();
    }

    let start = performance.now();
    for(let i=0; i<iterations; i++) {
        baselineRepos();
    }
    let end = performance.now();
    console.log(`Baseline: ${end - start} ms`);

    start = performance.now();
    for(let i=0; i<iterations; i++) {
        optimizedRepos();
    }
    end = performance.now();
    console.log(`Optimized: ${end - start} ms`);

    console.log("\n--- Particle Field Loop Benchmark ---");
    // warm up
    for(let i=0; i<100; i++) {
        baselineParticles();
        optimizedParticles();
    }

    const pIterations = 50000;

    start = performance.now();
    for(let i=0; i<pIterations; i++) {
        baselineParticles();
    }
    end = performance.now();
    console.log(`Baseline (Particles): ${end - start} ms`);

    start = performance.now();
    for(let i=0; i<pIterations; i++) {
        optimizedParticles();
    }
    end = performance.now();
    console.log(`Optimized (Particles): ${end - start} ms`);
}

runBenchmark();
