# Minimal testing setup for polythene with mithril-query and jest

Minimal example for: https://github.com/ArthurClemens/mithril-hooks/issues/6

## Usage
Clone repo, run `yarn install` and `yarn test`.


## Test output

```js
yarn run v1.22.4
$ jest --detectOpenHandles
 FAIL  tests/happy.test.js
  ✕ Test if textfield will render (45 ms)
  ✓ reference to verify testing setup (2 ms)

  ● Test if textfield will render

    TypeError: Converting circular structure to JSON
        --> starting at object with constructor 'Document'
        --- property '_previousSibling' closes the circle
        at JSON.stringify (<anonymous>)

       7 |
       8 | test('Test if textfield will render', () => {
    >  9 |     mq(TextField)
         |     ^
      10 | })
      11 |
      12 | test('reference to verify testing setup', () => {

      at stateFocused (node_modules/cyano-mithril/node_modules/mithril-hooks/dist/mithril-hooks.mjs:105:40)
      at Object.<anonymous> (tests/happy.test.js:9:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        3.573 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
