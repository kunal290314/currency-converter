// cucumber.mjs
export default {
  default: {
    require: ['tests/steps/**/*.js', 'tests/support/**/*.js'],
    format: ['progress', 'json:reports/cucumber.json'],
    paths: ['tests/features/**/*.feature'],
    publishQuiet: true,
    parallel: 0
  }
};
