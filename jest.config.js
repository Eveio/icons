module.exports = {
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  'transform': {
    '.*\\.vue$': 'vue-jest',
    '.*\\.jsx?': 'babel-jest'
  },
  'testURL': 'http://localhost/'
}
