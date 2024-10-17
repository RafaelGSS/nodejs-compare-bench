const benchNode = require('bench-node')
const tinybench = require('tinybench')
const benchmarkjs = require('benchmark')

const copiedFunction = require('./use-cases/copied-function')

const useCases = [copiedFunction];

async function main() {
  for (const c of useCases) {
    {
      const start = performance.now()
      const suite = new benchNode.Suite();
      c.createSuite(suite);
      await suite.run();
      console.log('Time elapsed: ', performance.now() - start)
      console.log('-'.repeat(process.stdout.columns - 2))
    }
    {
      const start = performance.now()
      const suite = new tinybench.Bench();
      c.createSuite(suite);
      await suite.warmup();
      await suite.run();
      console.table(suite.table())
      console.log('Time elapsed: ', performance.now() - start)
      console.log('-'.repeat(process.stdout.columns - 2))
    }
    {
      const start = performance.now()
      const suite = new benchmarkjs.Suite();
      c.createSuite(suite);
      suite
        .on('cycle', function(event) {
        console.log(String(event.target));
        })
      await suite.run();
      console.log('Time elapsed: ', performance.now() - start)
    }
  }
}

main()
