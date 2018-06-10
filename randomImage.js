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
    const submit = await page.$('#mKlEF');
    await submit.click();
    await page.keyboard.type(random());
    await page.keyboard.press('Enter');
    
    await page.$$eval('img', elements => setTimeout(elements[0].click(), 1500));

})();




