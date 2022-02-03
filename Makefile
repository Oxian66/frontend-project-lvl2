lint:
	npx eslint .

publish:
	npm publish --dry-run

install:
    npm install

gendiff:
    node bin/gendiff.js

test:
    npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

jest-watch: 
	NODE_OPTIONS=--experimental-vm-modules npx jest --bail --watch