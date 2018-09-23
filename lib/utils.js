'use strict';
const path = require('path');

const ArduinoCmd = function(cmd, method, query, flags){ 
    
    let cmdArgsArr = [...arguments];
    // flags = flags == false ? '--format text' : flags;
    // flags = typeof flags === 'undefined' ? '--format json' : flags;
    if( typeof flags === 'undefined') {
        flags = '--format json';
    }
    else {
        cmdArgsArr.pop();
    }
    // console.log('cmdArgsArr ', cmdArgsArr);
    // console.log('flags ', flags);
    
    let cmdArgsStr = cmdArgsArr.join(' ');
    let ArduinoCliBinRelPath = '../bin/arduino-cli-0.2.1-alpha.preview-osx'
    let ArduinoCliBinAbsPath =  path.resolve(__dirname, ArduinoCliBinRelPath);
    //let flags = '--format json';
    return [ArduinoCliBinAbsPath, cmdArgsStr, flags].join(' ');
}

 exports.arduinoCmd = ArduinoCmd;