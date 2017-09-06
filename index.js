'use strict';

const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const buildKeys = require('build-keys');

const readFile = promisify(fs.readFile);

const buildFiles = {};

buildFiles.latest = async (option) => {
    const config = Object.assign(
        {
            includeBranchLatest : true
        },
        option
    );

    const buildRoot = path.resolve(config.cwd || '', 'build');

    const keys = await buildKeys.latest(config);

    return Promise.all(keys.map(async (key) => {
        return {
            path    : key,
            content : await readFile(path.join(buildRoot, key))
        };
    }));
};

module.exports = buildFiles;
