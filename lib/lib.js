'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const { arduinoCmd } = require('./utils');

/**
 * Lib
 * @class
 * @todo add download method
 * @todo add install method
 * @todo add list method
 * @todo add uninstall method
 * @todo add updateIndex method
 * @todo add upgrade method
 */
const Lib = function() {
    this.cmd = 'lib';
    return this
}

/**
 * Search library
 * @param {string} libraryName Library name
 */
Lib.prototype.search = async function(libraryName) {    
    let cmdString = arduinoCmd(this.cmd, 'search', libraryName)
    //let stdout = execSync(cmdString).toString();
    const { stdout, stderr } = await exec(cmdString);    
    return JSON.parse(stdout);
}

Lib.prototype.download = async function() {    
}

Lib.prototype.install = async function() {    
}

Lib.prototype.list = async function() {    
}

Lib.prototype.uninstall = async function() {    
}

Lib.prototype.updateIndex = async function() {    
}

Lib.prototype.upgrade = async function() {    
}

/*
 download     Downloads one or more libraries without installing them.
  install      Installs one of more specified libraries into the system.
  list         Shows a list of all installed libraries.
  search       Searchs for one or more libraries data.
  uninstall    Uninstalls one or more libraries.
  update-index Updates the libraries index.
  upgrade      Upgrades installed libraries.

*/

module.exports = new Lib();