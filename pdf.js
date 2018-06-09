const puppeteer = require('puppeteer');
/* added next 3 lines for dynamic file naming */
const pd = require('parse-domain');
const url = 'https://news.ycombinator.com';
const filename = pd(url).domain + '.pdf';
/* */
(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    await page.pdf({path: filename, format: 'A4'});

    await browser.close();
})();