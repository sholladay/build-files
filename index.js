'use strict';

const fs = require('fs');
const path = require('path');
const buildKeys = require('build-keys');

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(content);
        });
    });
};

const buildFiles = {};

buildFiles.latest = (option) => {
    const config = Object.assign(
        {
            includeBranchLatest : true
        },
        option
    );

    const buildRoot = path.resolve(config.cwd || '', 'build');

    return buildKeys.latest(config).then((keys) => {
        return Promise.all(keys.map((key) => {
            return readFile(path.join(buildRoot, key)).then((content) => {
                return {
                    path : key,
                    content
                };
            });
        }));
    });
};

module.exports = buildFiles;
