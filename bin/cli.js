#!/usr/bin/env node

const {execSync} = require('child_process');

const RunCommand = (command) => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (err) {
        console.error(`Error creating project: ${err}`);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/sebastian-mcpe/create-express-ts-api.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Creating project with name ${repoName}...`);

const checkedOut = RunCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}...`);
const installedDeps = RunCommand(installDepsCommand);

if (!installedDeps) process.exit(-1);

console.log(`Project created successfully. Run the following command to start the project:`);
console.log(`cd ${repoName} && npm run start`);