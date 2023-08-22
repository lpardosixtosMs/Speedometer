# Speedometer 3.0: TodoMVC: Jquery Complex DOM

## Description

This application embeds the Jquery implementation of the TodoMVC application in a static UI shell that mimics a complex web page.

Please refer to the [Jquery README.md](../jquery/README.md) for more information on the Jquery TodoMVC implementation.

Please refer to the [big-dom-generator README.md](../../big-dom-generator/README.md) for more information on the UI shell.

## Build steps

Big-dom-generator and standalone Jquery TodoMVC need to be built before building the Jquery Complex DOM TodoMVC.

```
terminal
1. pushd ../../big-dom-generator && npm install && npm run build && popd
2. pushd ../jquery && npm install && npm run build && popd
3. npm run build
```
