var t0 = new Date().getTime();//performance.now();
var t1;
console.log('starting login process...');
const puppeteer = require('puppeteer');
const url = 'https://www.kickstarter.com/login';

(async() => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    console.log('navigating to webpage...');
    await page.goto(url);
    
    const inputEmail = await page.$('input[type=email]');
    console.log("typing username...");
    await inputEmail.click();
    await page.keyboard.type('beardshadow@gmail.com');
    
    const inputPass = await page.$('input[type=password]');
    console.log("typing password...");
    await inputPass.click();
    await page.keyboard.type('Sassdad1');
    
    const submit = 
        await page.$('input[type=submit') ? await page.$('input[type=submit') : await page.$('button[type=submit]')
    console.log("clicking submit...")
    await submit.click();
    console.log("taking screenshot...");
    await setTimeout(() => page.screenshot({path: 'loginPic.png'}), 3000);
    console.log("closing browser");
    await setTimeout(() => browser.close(), 4000);

    var t1 = await new Date().getTime();//performance.now();
    console.log("completed process in " + ((t1-t0)/1000) + " seconds");    
})();

