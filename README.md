Started:

Based on tutorial at [codementor.io](https://www.codementor.io/tamizhvendan/tutorials/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr)


[Phase 1](https://github.com/bigorangemachine/BOM-react-boilerplate/tree/phase-1):

Bundle CSS so its available to require.js (import/require())



[Phase 2](https://github.com/bigorangemachine/BOM-react-boilerplate/tree/phase-2):

Extract CSS to different directory



[Phase 3](https://github.com/bigorangemachine/BOM-react-boilerplate/tree/phase-3):

Added 'sass' to webpack & added minireset.css.  Enabled mocha tests with mocha-webpack.

* mocha-jsdom could have been used over jsdom-global but I couldn't find a configuration example. This is to allow react-dom simulation from node.
* istanbul is code coverage tool that could have been avoided but coverage is awesome. Configured through ```.nycrc```.   Configuration for 'watch' functionality requires restructuring of example(s).  Additional configuration was needed to ```.babelrc```; going to see if this can be managed with loaders in webpack.
* sinon (spy - helpful for creating mocks/stubs) could be added but trying to keep example simple
* Adding double dashes ```npm run build -- --watch``` allows the arguments after the double dash to be 'passed in'. This is an npm feature.



[Phase 4](https://github.com/bigorangemachine/BOM-react-boilerplate/tree/phase-4):

Added custom http server npm module of my own making (uses express) so that I have a server that hosts some files and I can start a basic API.

* use ```git tag -a v0.0.1 -m "Publishing Version v0.0.1" && git push origin --tags``` to tag your git commit for the npm module
* the ```package.json``` needs dependency  
```
"dependencies": {
  ...
  "modulename": "git://github.com/username/repo-name.git#v0.0.1",
  ...
 }
```
* ```modulename``` must be set in that modules ```package.json``` as ```{ ..., "name": "modulename", ... }```
* Added scripts to include http-server and used ```|``` (single pipe) to run both npm scripts in parallel (asynchronous subtask) in ```package.json``` the scripts ```{ ..., "scripts":{ ..., "test-watch": ..., "watch": ..., ... }, ... }```
