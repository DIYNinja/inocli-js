'use strict';

const { exec } = require('child_process');
const { arduinoCmd } = require('./utils');

const help = function() {
    console.log('help lib init...');
    const command = arduinoCmd('help');
    
    exec(command , (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
}

module.exports = help;