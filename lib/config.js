'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { arduinoCmd } = require('./utils');

/**
 * Config
 * @class
 * @todo Add config manager
 */
const Config = function() {
    this.cmd = 'config';
    return this
}

/**
 * Init config
 * @param {string} path - Path of custom .cli-config.yml
 */
Config.prototype.init = async function(path) {   
    // example path : "./.cli-config.yml"
    path = (typeof path !== 'undefined') ?  ' --save-as ' + path : '';    
    let cmdString = arduinoCmd(this.cmd, 'init --default' + path, query)
    const { stdout, stderr } = await exec(cmdString);       
    return JSON.parse(stdout);
}

/**
 * Dump config file
 * @returns {string} dumped config JSON string
 */
Config.prototype.dump = async function() {    
    let cmdString = arduinoCmd(this.cmd, 'dump')
    const { stdout, stderr } = await exec(cmdString);       
    return JSON.parse(stdout);
}

module.exports = new Config();