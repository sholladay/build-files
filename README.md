# build-files [![Build status for build-files on Circle CI.](https://img.shields.io/circleci/project/sholladay/build-files/master.svg "Circle Build Status")](https://circleci.com/gh/sholladay/build-files "Build Files Builds")

> Read the files from your build.

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

Get a list of the files within the latest build.

```js
buildFiles.latest().then((files) => {
    console.log('files:', files);
});
```

## API

### buildFiles.latest(option)

#### option

Type: `object`

Configuration and known build data.

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

## Contributing

See our [contributing guidelines](https://github.com/sholladay/build-files/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/build-files/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/build-files/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/build-files/blob/master/LICENSE "The license for build-files.") © [Seth Holladay](http://seth-holladay.com "Author of build-files.")

Go make something, dang it.
