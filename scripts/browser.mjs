import fs from 'node:fs';
import {chromium} from 'playwright';

// Installed Chrome on Windows, macOS or Linux; CHROME_PATH overrides, Playwright's own Chromium is the fallback.
const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
].filter(Boolean);

export function launchBrowser() {
    const executablePath = candidates.find(file => fs.existsSync(file));
    return chromium.launch({...(executablePath ? {executablePath} : {}), headless:true});
}
