const pup = require('puppeteer');
const random = require('random-words');
const fs = require('fs');
const url = 'http://images.google.com';
const time = new Date();

(async() => {
    const browser = await pup.launch();
    const page = await browser.newPage();
    
    await page.goto(url);
    const searchBar = await page.$('#lst-ib');
    await searchBar.click();

    await page.keyboard.type(random());
    await page.keyboard.press('Enter');

    await page.waitForSelector('.rg_ic.rg_i', { timeout: 10000 });
    const firstImg = await page.$$eval('img', elements => elements[1].click());
    
    await page.waitForSelector('.irc_mi[src]', { timeout: 10000 });
    const imgUrl = await page.evaluate(() => document.querySelector('.irc_mi[src]').getAttribute('src'));
    const viewSource = await page.goto(imgUrl);
    
    fs.writeFile(`./randomPic-${time.getMinutes()}.${time.getSeconds()}.jpg`, await viewSource.buffer(), function(err) {
        if(err) return console.log(err);
        console.log("file saved");
    });
    
    await browser.close();
})();
