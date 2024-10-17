const path = require('node:path');
const Piscina = require('piscina');

const USE_CASES = ['copied-function', 'empty-function'];
const BENCHMARKS = ['bench-node', 'tinybench', 'benchmark'];

const piscina = new Piscina({
  filename: path.resolve(__dirname, 'worker.js')
});

const halfScreen = process.stdout.columns / 2;

async function main() {
  for (const c of USE_CASES) {
    console.log(`${'_'.repeat(halfScreen / 2)}${c}${'_'.repeat(halfScreen / 2)}`);
    for (const bench of BENCHMARKS) {
      console.info(`Running... ${bench}`);
      await piscina.run({
        module: bench,
        useCase: c,
      });
      console.info('-'.repeat(halfScreen));
    }
  }
}

main()
