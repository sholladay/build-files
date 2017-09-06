# build-files [![Build status for build-files](https://img.shields.io/circleci/project/sholladay/build-files/master.svg "Build Status")](https://circleci.com/gh/sholladay/build-files "Builds")

> Read the files from your build

## Why?

 - Know what is in your build and where it is.
 - Useful to send the build to external services.
 - Agnostic of how the files were written.

## Install

```sh
npm install build-files --save
```

## Usage

Get it into your program.

```js
const buildFiles = require('build-files');
```

Get a list of the files within the most recent build.

```js
buildFiles.latest().then((files) => {
    console.log('files:', files);
    // [
    //     {
    //         path    : 'master/1.0.0/foo.js',
    //         content : 'This is foo.'
    //     }
    // ]
});
```

## API

### buildFiles.latest(option)

Returns a `Promise<Array>` for file objects with `path` and `content` properties.

#### option

Type: `object`

Settings and known [build data](https://github.com/sholladay/build-data).

##### cwd

Type: `string`<br>
Default: `process.cwd()`

The parent directory of the build root.

##### branch

Type: `string`

Read the files from the given branch name, rather than the most recently built branch.

##### version

Type: `string`

Read the files from the given version, rather than the most recently built version of the branch.

##### includeBranchLatest

Type: `boolean`<br>
Default: `true`

Whether to also read the files at the `<branch>/latest` path.

## Related

 - [delivr](https://github.com/sholladay/delivr) - Build your code and ship it to S3.
 - [build-keys](https://github.com/sholladay/build-keys) - Get the paths of files from your build.
 - [build-dir](https://github.com/sholladay/build-dir) - Get a place to put your build.
 - [build-data](https://github.com/sholladay/build-data) - Get metadata for your build.
 - [build-path](https://github.com/sholladay/build-path) - Get a path for the given build.
 - [build-version](https://github.com/sholladay/build-version) - Get a version for your build.

## Contributing

See our [contributing guidelines](https://github.com/sholladay/build-files/blob/master/CONTRIBUTING.md "Guidelines for participating in this project") for more details.

1. [Fork it](https://github.com/sholladay/build-files/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/build-files/compare "Submit code to this project for review").

## License

[MPL-2.0](https://github.com/sholladay/build-files/blob/master/LICENSE "License for build-files") © [Seth Holladay](https://seth-holladay.com "Author of build-files")

Go make something, dang it.
