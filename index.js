const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const $ = require('@k3rn31p4nic/google-translate-api');
const unified = require('unified');
const parse = require('remark-parse');
const stringify = require('remark-stringify');
const visit = require('unist-util-visit');
const simpleGit = require('simple-git');
const git = simpleGit();

const toAst = (markdown) => {
  return unified().use(parse).parse(markdown);
};

const toMarkdown = (ast) => {
  return unified().use(stringify).stringify(ast);
};

const README = 'readme.md';
const mainDir = '.';
const lang = core.getInput('LANG') || 'zh-CN';
const readme = readFileSync(join(mainDir, README), { encoding: 'utf8' });
const readmeAST = toAst(readme);
console.log('AST CREATED AND READ');

let originalText = [];

visit(readmeAST, async (node) => {
  if (node.type === 'text') {
    originalText.push(node.value);
    node.value = (await $(node.value, { to: lang })).text;
  }
});

const translatedText = originalText.map(async (text) => {
  return (await $(text, { to: lang })).text;
});

async function writeToFile() {
  await Promise.all(translatedText);
  writeFileSync(
    join(mainDir, `readme-${lang}.md`),
    toMarkdown(readmeAST),
    'utf8'
  );
  console.log(`${lang} readme written`);
}

async function commitChanges(lang) {
  console.log('commit started');
  await git.add('./*');
  await git.addConfig('user.name', 'github-actions[bot]');
  await git.addConfig(
    'user.email',
    '41898282+github-actions[bot]@users.noreply.github.com'
  );
  await git.commit(
    `docs: Added ${lang} readme translations via https://github.com/dephraiim/translate-readme`
  );
  console.log('finished commit');
  await git.push();
  console.log('pushed');
}

async function translateReadme() {
  try {
    await writeToFile();
    await commitChanges(lang);
    console.log('Done');
  } catch (error) {
    throw new Error(error);
  }
}

translateReadme();
