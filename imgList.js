const pup = require('puppeteer');
const url = 'https://www.google.com/search?q=cool&oq=cool&aqs=chrome..69i57j69i65j0l4.631j0j7&sourceid=chrome&ie=UTF-8';

(async()=>{
    const browser = await pup.launch({headless: false});
    const page = await browser.newPage();

    await page.goto(url);
    var links = await page.evaluate(() =>{
        return Array.from(document.querySelectorAll('a'));
    })
    var newbody = await page.evaluate(() => {
        return document.querySelector('body');
    });

    await page.evaluate(() => {
        newbody.innerHTML = links;
    })

})()