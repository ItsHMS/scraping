const puppeteer = require("puppeteer");
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://vuetifyjs.com/en/about/sponsors-and-backers/#cursory');
    await page.waitForNetworkIdle({waitUntil:"networkidle0"})

    await page.screenshot({path: 'screenshot.png'});
    const data = await page.evaluate(() => {
      return {
        text: document.documentElement.innerText,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };
    });
  
  
    const text = data.html

    function extractEmails ( text ){
      return text.match(/([a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9_-]+)/gi);
      }
       
      console.log(extractEmails(text))
    await browser.close();
  })();
