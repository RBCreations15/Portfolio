import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';

const outputDirectory = resolve('dist');
const configuredBase = (process.env.BASE_PATH ?? '/').replace(/\/$/, '') || '/';
const htmlFiles = [];
const failures = [];

function collectHtmlFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collectHtmlFiles(path);
    if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(path);
  }
}

function resolveTarget(sourceFile, rawHref) {
  const href = rawHref.split('#')[0].split('?')[0];
  if (!href || /^(?:https?:|mailto:|tel:|data:)/.test(href)) return null;

  let pathname = decodeURIComponent(href);
  if (configuredBase !== '/' && pathname.startsWith(`${configuredBase}/`)) {
    pathname = pathname.slice(configuredBase.length);
  }

  if (pathname.startsWith('/')) return join(outputDirectory, pathname);
  return resolve(dirname(sourceFile), pathname);
}

function targetExists(target) {
  if (existsSync(target)) {
    if (extname(target)) return true;
    return existsSync(join(target, 'index.html'));
  }
  return existsSync(`${target}.html`) || existsSync(join(target, 'index.html'));
}

if (!existsSync(outputDirectory)) {
  throw new Error('dist/ does not exist. Run npm run build before checking links.');
}

collectHtmlFiles(outputDirectory);

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const links = html.matchAll(/href=["']([^"']+)["']/g);

  for (const [, href] of links) {
    const target = resolveTarget(file, href);
    if (target && !targetExists(target)) {
      failures.push(`${relative(outputDirectory, file)} → ${href}`);
    }
  }
}

if (failures.length > 0) {
  console.error(`Found ${failures.length} broken internal link(s):\n${failures.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${htmlFiles.length} generated HTML files: all internal links resolve.`);
}
