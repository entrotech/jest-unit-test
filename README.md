# Unit Testing JavaScript with the Jest Framework

Create new folder for project

```
cd jest-example
npm init -y
npm install jest
code .
```

Create sum.js file:

```
function sum(a, b){
    return a + b;
}

module.export = sum;
```

Create unit test file sum.test.js:

```
const sum = require("./sum");

it("1 + 2 equals 3", () => {
    expect(sum(1,2)).toBe(3);
})
```

From a bash command line, execute the unit test:

```
> jest
```

```
John@DESKTOP-DC460CB MINGW64 /c/git/javascript-unit-test
$ jest
 PASS  ./sum.test.js
  the sum function
    √ adds 1 + 2 to equal 3 (3ms)
    √ no arguments throws error (1ms)
    √ string arg throws error
    √ true args throw error (1ms)
    √ add three args
    √ third arg is string throws errror
    √ add seven args
    √ seventh arg is true throw error (1ms)

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        1.787s
Ran all test suites.

John@DESKTOP-DC460CB MINGW64 /c/git/javascript-unit-test
$
```
