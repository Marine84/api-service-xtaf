module.exports = {
  'allow-uncaught': false,
  'async-only': false,
  bail: false,
  'check-leaks': false,
  color: true,
  delay: false,
  diff: true,
  exit: false, // could be expressed as "'no-exit': true"
  extension: ['js', 'cjs', 'mjs', 'ts'],

  require: 'ts-node/register',
  // reporter: "mochawesome",
  // reporterOptions:{
  //     reportFilename: "poxos",
  //     reportDir: "./"
  // },

  reporter: 'mocha-multi-reporters',
  'reporter-options': 'configFile=report.config.json',
  // 'report-options': {
  //     reporterOption: "configFile=report.config.json"
  // },
  package: './package.json',

  spec: ['specs/*.spec.ts'], // the positional arguments!
  timeout: '2000', // same as "timeout: '2s'"
}
