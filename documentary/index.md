# debugger-report

`debugger-report` is a Node.js package to reproduce a bug in VS Code when debugger opens incorrect file.

## Steps to Reproduce

1. Clone the repository.

```sh
git clone https://github.com/artdecocode/debugger-report.git
code debugger-report
```

2. Open `test/spec/index.js` and set a breakpoint and line 15.

3. Hit `F5` and wait for the debugger to start. It will pause in the `src/index.js` file at line 15 rather than in `test/spec/index.js`.

![replay of the bug](appshot-debugger1.gif)
