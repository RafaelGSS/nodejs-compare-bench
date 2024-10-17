function createSuite(suite) {
  suite
    .add('empty', function () {
    })
    .add('async empty', async function () {
    })
  return suite;
}

module.exports = {
  createSuite
};
