import gendiff from '../src/index.js';
import fs from 'fs';
import getFixturePath from '../utils.js';


/*const expectation = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;*/

  const jsonPath1 = getFixturePath('flat1.json');
  const jsonPath2 = getFixturePath('flat2.json');
  const ymlPath1 = getFixturePath('flat1.yml');
  const ymlPath2 = getFixturePath('flat2.yml');
  const result = fs.readFileSync(getFixturePath('expected_file1.txt'), 'utf8');
test('gendiff test flat json', () => {
  expect(gendiff(jsonPath1, jsonPath2)).toEqual(result);
});
test('gendiff test flat yml', () => {
  expect(gendiff(ymlPath1, ymlPath2)).toEqual(result);
});