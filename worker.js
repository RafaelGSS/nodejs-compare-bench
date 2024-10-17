async function worker ({ module, useCase }) {
  let suite;
  let beforeBenchFn, afterBenchFn;

  switch (module) {
    case 'tinybench':
      mod = new require(module);
      suite = new mod.Bench();
      beforeBenchFn = async (suite) => suite.warmup();
      afterBenchFn = async (suite) => console.table(suite.table());
      break;
    case 'benchmark':
      mod = new require(module);
      suite = new mod.Suite();
      suite
        .on('cycle', function(event) {
          console.log(String(event.target));
        })
      break;
    case 'bench-node':
      mod = new require(module);
      suite = new mod.Suite();
      break;
    default:
      throw new Error('Unsupported benchmark tool');
  }

  const { createSuite } = require(`./use-cases/${useCase}`);
  createSuite(suite);

  if (beforeBenchFn) {
    await beforeBenchFn(suite);
  }
  await suite.run();
  if (afterBenchFn) {
    await afterBenchFn(suite);
  }
}

module.exports = worker;
