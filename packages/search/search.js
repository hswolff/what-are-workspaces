const cowsay = require('cowsay2');
const cowsayVersion = require('cowsay2/package.json').version;

console.log(cowsay.say('Search at version ' + cowsayVersion));

const common = require('@workspaces/common');

common('Search For Me!');
