'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const { arduinoCmd } = require('./utils');

/**
 * Sketch
 * @class
 */
const Sketch = function() {
    this.cmd = 'sketch';
    this.sketchPath = '';
    return this
}
/**
 * Create a new sketch
 * @param {string} sketchName 
 * @returns {string} Created created path
 */

Sketch.prototype.new = async function(sketchName) {    
    let cmdString = arduinoCmd(this.cmd, 'new', sketchName,  '--format text')
    console.log('cmdString ', cmdString);
    
    const { stdout, stderr } = await exec(cmdString);    
    this.sketchPath = stdout.replace('Sketch created in: ', '');
    // TODO: handle case where file already exist
    return this.sketchPath;
    
    //Sketch created in: /Users/alexandre/Documents/Arduino/ToRemoveFoo2
    //Error: mkdir /Users/alexandre/Documents/Arduino/ToRemoveFoo: file exists
}

module.exports = new Sketch();