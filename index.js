const path = require('node:path');
const { platform, arch, cpus, totalmem } = require('node:os');
const Piscina = require('piscina');

const USE_CASES = ['copied-function', 'empty-function'];
const BENCHMARKS = ['bench-node', 'tinybench', 'benchmark'];

const piscina = new Piscina({
  filename: path.resolve(__dirname, 'worker.js')
});

const halfScreen = process.stdout.columns / 2;

const machineInfo = `${platform()} ${arch()} | ${cpus().length} vCPUs | ${(totalmem() / (1024 ** 3)).toFixed(1)}GB Mem`

console.log(`\n
* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
`)

async function main() {
  for (const c of USE_CASES) {
    console.log(`${'_'.repeat(halfScreen / 2)}${c}${'_'.repeat(halfScreen / 2)}`);
    for (const bench of BENCHMARKS) {
      console.log(`Running... ${bench}`);
      await piscina.run({
        module: bench,
        useCase: c,
      });
      console.log('-'.repeat(halfScreen));
    }
  }
}

main()
