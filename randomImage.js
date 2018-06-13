const pup = require('puppeteer');
const random = require('random-words');
const url = 'http://images.google.com';

(async() => {
    const browser = await pup.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto(url);
    const searchBar = await page.$('#lst-ib');
    await searchBar.click();

    await page.keyboard.type(random());
    await page.keyboard.press('Enter');

    await page.waitForSelector('.rg_ic.rg_i', { timeout: 10000 });
    const firstImg = await page.$$eval('img', elements => elements[1].click());
    
    await page.waitForSelector('.Tl8XHc', { timeout: 10000 });
    const firstImgPage = await page.evaluate(() => document.querySelector('.irc_vpl.i3599.irc_lth').href);
    console.log(firstImgPage);
    //await page.goto(firstImgPage);    
    
    //await page.waitForSelector('#isr_mc', { timeout: 10000 });
    //await page.evaluate(() => document.querySelector('#isr_mc a'));

    //await browser.close();
})();
