module.exports = {
  *cjs(task) {
    yield task.source('index.d.ts').target('build')
  },
};
