[![Build Status](https://travis-ci.org/UncleFirefox/GbTs.svg?branch=master)](https://travis-ci.org/UncleFirefox/GbTs)
[Deployed on gihub.io!](https://unclefirefox.github.io/GbTs/)

# GbTS: Yet another Gameboy emulator written in Typescript

The idea behind this project is to create a Gameboy emulator using modern development techniques including:
* Latest features of Javascript yet being able to backport it to previous versions (thanks Typescript!)
* Reactive principles (yes RxJS I'm looking at you!)
* Proper multithreading with WebWorkers
* WebAudio API (when possible)
* WebGL (when possible)
* A nice debugger outside of the emulator we can be attached to

And why not, when doing personal non-profit projects like this one we expect to:
* Learn the low-level internals of the Gameboy
* Approach the development a very pedadogical experience for others. Aka give something back to the community
* And last but not least have fun coding!

## Steps to run the application:

1. Run "npm install" at the command-line from the root of the project (where the package.json file lives). 
2. Run "npm start" at the command-line. This will compile all of the TypeScript files and generate .js and .map (for debugging) files. 
A watcher will also be created to monitor any changes in the .ts files. Leave the command-window open while doing development work.
3. Open the project folder in VS Code (http://code.visualstudio.com) or another editor.
