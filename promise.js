// basic constructor
// 1. reject and resolve are provided by js itself
// 1.1 internal state change:
//   pending(result: undefined) -> fulfilled(result: value)
//   pending(result: undefined) -> rejected(result: error)
const promise = new Promise((resolve, reject ) => {
  // codes that do some work
})
