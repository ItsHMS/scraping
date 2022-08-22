const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
console.log("runnig");
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://vuetifyjs.com/en/');
    await page.waitForNetworkIdle({waitUntil:"networkidle0"})

    await page.screenshot({path: 'screenshot.png'});
    const data = await page.evaluate(() => {
      return {
        html: document.documentElement.innerHTML,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };
    });
  
  

    const $ = cheerio.load(data.html);
    const ele = $(".v-btn__content");
    console.log(ele.text());
    await browser.close();
  })();
