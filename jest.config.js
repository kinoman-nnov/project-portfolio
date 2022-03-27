module.exports = {
  "testEnvironment": "jsdom",
  "moduleFileExtensions": [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  "transform": {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "babel-jest"
  }
}