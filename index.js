const path = require('node:path');
const Piscina = require('piscina');

const USE_CASES = ['copied-function'];
const BENCHMARKS = ['bench-node', 'tinybench', 'benchmark'];

const piscina = new Piscina({
  filename: path.resolve(__dirname, 'worker.js')
});

async function main() {
  for (const c of USE_CASES) {
    for (const bench of BENCHMARKS) {
      console.info(`Running... ${bench}`);
      await piscina.run({
        module: bench,
        useCase: c,
      });
      console.info('-'.repeat(process.stdout.columns / 2));
    }
  }
}

main()
