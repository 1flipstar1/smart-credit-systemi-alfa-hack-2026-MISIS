import {typographyProfiles} from './typography.mjs';

export async function auditTypography(page) {
    await page.evaluate(async () => {
        await document.fonts.ready;
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    });
    return page.evaluate(profiles => {
        const probe = document.createElement('span');
        probe.hidden = true;
        document.body.appendChild(probe);
        const installed = profiles.map(profile => {
            probe.style.cssText = profile.css;
            const css = getComputedStyle(probe);
            return {...profile, family:css.fontFamily, size:css.fontSize, line:css.lineHeight};
        });
        probe.remove();
        const issues = [], used = new Set();
        let textBlocks = 0, fields = 0, placeholders = 0;
        const check = (el, css, text, kind) => {
            const matches = installed.filter(p => p.family === css.fontFamily && p.size === css.fontSize && p.line === css.lineHeight);
            const fail = reason => issues.push({tag:el.tagName, text:text.slice(0,80), kind, reason,
                family:css.fontFamily, size:css.fontSize, line:css.lineHeight, weight:css.fontWeight});
            if (!matches.length) fail('No matching installed Core Components typography style');
            else {
                matches.forEach(p => used.add(p.name));
                if (/^H[1-6]$/.test(el.tagName) && !matches.some(p => p.name.startsWith('headline'))) fail('Heading uses a non-heading style');
            }
            // Typography.Text exposes regular/medium/bold; Title additionally exposes semibold.
            const weights = css.fontFamily.includes('Styrene UI') ? ['400','500','700'] : ['400','500','600','700'];
            if (!weights.includes(css.fontWeight)) fail('Undocumented or unavailable font weight');
            if (css.fontFamily.includes('Styrene UI') && !css.fontFeatureSettings.includes('ss01')) fail('Styrene requires ss01');
            if (css.webkitFontSmoothing !== 'antialiased') fail('Missing recommended font smoothing');
        };
        for (const el of document.querySelectorAll('body *')) {
            if (['SCRIPT','STYLE','OPTION'].includes(el.tagName) || !el.getClientRects().length) continue;
            const css = getComputedStyle(el);
            if (css.visibility === 'hidden' || css.display === 'none') continue;
            const directText = [...el.childNodes].filter(n => n.nodeType === Node.TEXT_NODE).map(n => n.textContent).join(' ').trim();
            if (directText) { check(el,css,directText,'text'); textBlocks++; }
            if (el.matches('textarea, select, input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])')) {
                check(el,css,el.getAttribute('aria-label') || el.id || el.tagName,'field'); fields++;
                if (el.getAttribute('placeholder')?.trim()) {
                    const ph = getComputedStyle(el,'::placeholder');
                    // Chromium reports "normal" even for an explicitly styled ::placeholder line-height.
                    // Its line box is controlled by the input; font metrics still come from the pseudo-element.
                    check(el,{fontFamily:ph.fontFamily,fontSize:ph.fontSize,fontWeight:ph.fontWeight,
                        fontFeatureSettings:ph.fontFeatureSettings,webkitFontSmoothing:ph.webkitFontSmoothing,
                        lineHeight:ph.lineHeight === 'normal' ? css.lineHeight : ph.lineHeight},el.getAttribute('placeholder'),'placeholder');
                    placeholders++;
                }
            }
        }
        return {textBlocks, fields, placeholders, installedStyles:installed.length, usedStyles:[...used].sort(), issues,
            overflow:document.documentElement.scrollWidth > innerWidth};
    }, typographyProfiles);
}
