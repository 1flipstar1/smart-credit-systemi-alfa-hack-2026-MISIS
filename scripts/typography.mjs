import fs from 'node:fs';

// Expand the installed library's actual mixins, including in legacy HTML style
// attributes. No duplicate font scale and no PostCSS runtime in standalone HTML.
const source = fs.readFileSync('node_modules/@alfalab/core-components-vars/typography.css', 'utf8');
const mixins = new Map([...source.matchAll(/@define-mixin ([\w-]+)\s*\{([^}]+)\}/g)]
    .map(([, name, body]) => [name, body.trim().replace(/\s+/g, ' ')]));

export function expandTypography(source) {
    return source.replace(/@mixin ([\w-]+);/g, (_, name) => {
        if (!mixins.has(name)) throw new Error(`Unknown Core Components typography mixin: ${name}`);
        return mixins.get(name);
    });
}
