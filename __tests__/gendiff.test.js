import gendiff from '../src/index.js';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

/*const expectation = `{{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`*/

  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const result = fs.readFileSync(getFixturePath('expected_file1.txt'), 'utf8');
test('gendiff on right case', () => {
  expect(gendiff(path1, path2)).toBe(result);

});