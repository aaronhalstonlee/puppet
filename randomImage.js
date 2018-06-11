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

    await page.waitForSelector('#isr_mc', { timeout: 10000 } );
    const imageUrl = await page.evaluate(() => document.querySelector('#isr_mc a').href );
    console.log(imageUrl);

    await browser.close();
})();




