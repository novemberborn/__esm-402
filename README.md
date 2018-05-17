# Reproduction for https://github.com/standard-things/esm/issues/402

1. Clone this repository
2. `npm install`
3. `npm test`
4. `npm run coverage` gives:

  ```
  ----------|----------|----------|----------|----------|-------------------|
  File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
  ----------|----------|----------|----------|----------|-------------------|
  All files |        0 |        0 |        0 |        0 |                   |
   index.js |        0 |        0 |        0 |        0 |             2,3,5 |
  ----------|----------|----------|----------|----------|-------------------|
  ```
5. `rm -rf node_modules/.cache/esm`
6. `npm run coverage`: note how there's coverage now!
7. Don't forget to `rm -rf node_modules/.cache/esm` again before returning to step 3
