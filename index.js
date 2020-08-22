const { readFileSync, writeFileSync } = require('fs');
const { join, resolve } = require('path');
const $ = require('@k3rn31p4nic/google-translate-api');
const unified = require('unified');
const parse = require('remark-parse');
const stringify = require('remark-stringify');
const visit = require('unist-util-visit');
const { default: Axios } = require('axios');
const simpleGit = require('simple-git');
const { rejects } = require('assert');
const git = simpleGit();

const toAst = (markdown) => {
  return unified().use(parse).parse(markdown);
};

const toMarkdown = (ast) => {
  return unified().use(stringify).stringify(ast);
};

const README = 'README.md' || 'readme.md';
const mainDir = '.';
const readme = readFileSync(join(mainDir, README), { encoding: 'utf8' });
const readmeAST = toAst(readme);
let originalText = [];

visit(readmeAST, async (node) => {
  if (node.type === 'text') {
    originalText.push(node.value);
    node.value = (await $(node.value, { to: 'zh-CN' })).text;
  }
});

const newText = originalText.map(async (text) => {
  return (await $(text, { to: 'zh-CN' })).text;
});

async function p() {
  await Promise.all(newText);
  writeFileSync(join(mainDir, README), toMarkdown(readmeAST), 'utf8');
}

p();

// async function commit() {
//   const mail = await Axios.get(`https://api.github.com/users/${process.env.GITHUB_ACTOR}/events`);
//   let email;
//   let author;
//   await mail.data.forEach((data) => {
//     if (data.type === 'PushEvent') {
//       email = data.payload.commits[0].author.email;
//     } else {
//       author = 'github-actions[bot]';
//       email = '41898282+github-actions[bot]@users.noreply.github.com';
//     }
//   });

//   let actor = author ? author : process.env.GITHUB_ACTOR;

//   await git.add('./*');
//   await git.addConfig('user.name', actor);
//   await git.addConfig('user.email', email);
//   await git.commit(
//     'docs: Added Readme translations via https://github.com/dephraiim/translate-readme'
//   );
//   await git.push();
// }

// try {
//   commit();
// } catch (error) {
//   throw new Error(error);
// }
