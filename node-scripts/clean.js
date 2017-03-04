require('shelljs/global');

const BUILD_DIR = 'public';

console.log('[Build directory cleaned]');
rm('-rf', BUILD_DIR);
mkdir(BUILD_DIR);