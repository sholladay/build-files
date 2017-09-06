import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import test from 'ava';
import buildDir from 'build-dir';
import mkdirtemp from 'mkdirtemp';
import buildFiles from '.';

const writeFile = promisify(fs.writeFile);

test('buildKeys.latest() basics', async (t) => {
    const cwd = await mkdirtemp();
    const build = await buildDir.prepare({
        cwd,
        branch  : 'foo',
        version : 'blah'
    });
    await writeFile(path.join(build.path, 'bar'), 'some text');
    await build.finalize();
    const files = await buildFiles.latest({ cwd });
    t.deepEqual(files, [
        {
            path    : 'foo/blah/bar',
            content : Buffer.from('some text')
        },
        {
            path    : 'foo/latest/bar',
            content : Buffer.from('some text')
        }
    ]);
});

test('buildKeys.latest() no files', async (t) => {
    const cwd = await mkdirtemp();
    const build = await buildDir.prepare({
        cwd,
        branch  : 'foo',
        version : 'blah'
    });
    await build.finalize();
    const files = await buildFiles.latest({ cwd });
    t.deepEqual(files, []);
});
