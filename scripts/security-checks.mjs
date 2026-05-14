import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const rootDir = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));

function readProjectFile(path) {
  return readFileSync(join(rootDir, path), 'utf8');
}

function gitTrackedFiles() {
  return execFileSync('git', ['ls-files'], {
    cwd: rootDir,
    encoding: 'utf8',
  })
    .split('\n')
    .filter(Boolean);
}

const trackedFiles = gitTrackedFiles();
const textFilePattern = /\.(cjs|css|html|js|json|md|mjs|ts|tsx|txt|yml)$/;
const searchableFiles = trackedFiles.filter((path) =>
  textFilePattern.test(path) &&
  path !== 'scripts/security-checks.mjs' &&
  (/^(app|components|lib|scripts|\.github)\//.test(path) ||
    ['next.config.ts', 'package.json', 'package-lock.json', 'README.md'].includes(path)),
);

const combinedSource = searchableFiles
  .map((path) => `\n--- ${path} ---\n${readProjectFile(path)}`)
  .join('\n');

assert.doesNotMatch(combinedSource, /PEXELS_API_KEY|pexels\.com\/v1/i, 'Pexels API references must not be shipped');
assert.doesNotMatch(
  combinedSource,
  /automation\.codariq\.de|\/webhook(?:-test)?\/[0-9a-f-]{20,}/i,
  'Real automation domains and webhook ids must not be shipped',
);
assert.doesNotMatch(
  combinedSource,
  /NEXT_PUBLIC_N8N_BASIC_AUTH|Authorization:\s*buildBasicAuthHeader|Basic\s+[A-Za-z0-9+/=]{12,}/i,
  'Client bundles must not contain webhook basic-auth credentials',
);
assert.deepEqual(
  trackedFiles.filter((path) => /(^|\/)\.env(?:\.|$)|\.pem$/.test(path)),
  [],
  'No env files or PEM keys may be tracked',
);
assert.deepEqual(
  trackedFiles.filter((path) => /(^|\/)\.next\//.test(path)),
  [],
  'Next.js build traces must not be tracked',
);

const articlesSource = readProjectFile('lib/articles.ts');
assert.match(articlesSource, /function htmlToPlainText/, 'Article summaries must pass through htmlToPlainText');
assert.match(articlesSource, /tagContent\.startsWith\('script'\)/, 'Script tags must be skipped in summary text');
assert.match(articlesSource, /tagContent\.startsWith\('style'\)/, 'Style tags must be skipped in summary text');
assert.doesNotMatch(articlesSource, /\.replace\(\s*\/<\[\^>\]\+\>\/g/, 'Avoid regex-only HTML stripping');

const packageJson = JSON.parse(readProjectFile('package.json'));
assert.equal(packageJson.overrides?.postcss, '$postcss', 'Root postcss override must stay active');
assert.equal(packageJson.overrides?.next?.postcss, '$postcss', 'Next postcss override must stay active');

console.log('Security checks passed');
