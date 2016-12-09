'use strict';

const fs = require('fs');
const path = require('path');
const buildKeys = require('build-keys');

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, content) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(content);
        });
    });
};

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
