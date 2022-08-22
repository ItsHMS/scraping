const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
console.log("runnig");
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.goto('https://vuetifyjs.com/en/');
    
    await page.goto('https://vuetifyjs.com/en/about/sponsors-and-backers/#cursory');
    await page.waitForNetworkIdle({waitUntil:"networkidle0"})

    await page.screenshot({path: 'screenshot.png'});
    const data = await page.evaluate(() => {
      return {
        html: document.documentElement.innerText,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };
    });
  
  
    const dat = data.html
    
    console.log(typeof dat)
    // const $ = cheerio.load(data.html);
    // const ele = $(".v-btn__content");
    // console.log(ele.text());
    function extractEmails ( text ){
      return text.match(/([a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9_-]+)/gi);
      }
       
      console.log(extractEmails(dat))
    await browser.close();
  })();
