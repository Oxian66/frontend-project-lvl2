import * as fs from 'fs';
import _ from 'lodash';

const gendiff = (filepath1, filepath2) => {
  const path1 = fs.readFileSync(filepath1, 'utf8');
  const path2 = fs.readFileSync(filepath2, 'utf8');
  const data1 = JSON.parse(path1);
  const data2 = JSON.parse(path2);
  const commonKeys = _.union(Object.keys(data1), Object.keys(data2));
  const result = commonKeys.reduce((acc, key) => {
    if (_.has(data1, key) && _.has(data2. key)) {
      if (data1[key] === data2[key]) { return [...acc, `    ${key}: ${data1[key]}`]; }
      return [...acc, `  - ${key}: ${data1[key]}`, `  + ${key}: ${data2[key]}`];
    }
    if (_.has(data1, key) && !_.has(data2, key)) { return [...acc, `  - ${key}: ${data1[key]}`]; }
    return [...acc, `  + ${key}: ${data2[key]}`];
  }, []);
  return `{\n${result.join('\n')}\n}`;
};
export default gendiff;