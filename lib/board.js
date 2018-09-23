"use strict";

const { execSync } = require('child_process');
const { arduinoCmd } = require('./utils');

/**
 * Board.
 * @class
 */
const Board = function () {
    this.cmd = 'board';
    return this
}

/**
 * Attaches a sketch to a board.
 * @param {string} query 
 */
Board.prototype.attach = function (query) {
    let cmdString = arduinoCmd(this.cmd, 'attach', query)
    let stdout = execSync(cmdString).toString();
    return JSON.parse(stdout);
}

/**
 * List connected boards.
 * @returns {string} JSON list of connected boards
 */
Board.prototype.list = function () {
    let cmdString = arduinoCmd(this.cmd, 'list')
    let stdout = execSync(cmdString).toString();
    return JSON.parse(stdout);
}

/**
 * List all known boards.
 * @returns {string} JSON list of known boards
 */
Board.prototype.listall = function () {
    let cmdString = arduinoCmd(this.cmd, 'listall')
    let stdout = execSync(cmdString).toString();
    return JSON.parse(stdout);
}

module.exports = new Board();