# debugger-report

[![npm version](https://badge.fury.io/js/debugger-report.svg)](https://npmjs.org/package/debugger-report)

`debugger-report` is a new Node.js npm package. A package to reproduce a bug in VS Code when debugger opens incorrect file.

```sh
yarn add -E debugger-report
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`debuggerReport(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)

## API

The package is available by importing its default function:

```js
import debuggerReport from 'debugger-report'
```

### `debuggerReport(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

```js
/* yarn example */
import debuggerReport from 'debugger-report'

(async () => {
  await debuggerReport()
})()
```

---

(c) [Art Deco][1] 2018

[1]: https://artdeco.bz
