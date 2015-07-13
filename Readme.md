# Angular 2 Basic Tutorial and Examples

A couple of samples scripts I put together to help learn the basics of Angular 2.X using Typscript.

## Getting Started

In order to run these scripts you'll need to make sure to do the following:

### Install Node.js and NPM - Download installer here: https://nodejs.org/
### Download Typescript definitions
```
$ npm install -g tsd@^0.6.0
$ tsd install angular2 es6-promise rx rx-lite
```
###  Install a Typescript Compiler
```
$ npm install -g typescript@^1.5.0-beta
```
###  Make sure to compile the TS files you are running or editing
```
$ tsc --watch -m commonjs -t es5 --emitDecoratorMetadata %YOURFILE%.ts
```
###  Serve the HTML files locally, http-server is one possibility
```
# From the directory that contains index.html:
$ npm install -g http-server  # Or sudo npm install -g http-server
$ http-server                 # Creates a server at localhost:8080
# In a browser, visit localhost:8080/index.html
```

## Resources

For the most up to date info on Angular 2 goto the official site at: https://angular.io/
