const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    console.log(browser);
    const page = await browser.newPage();
    console.log(page.geolocation);

    // Emulate geolocation
    const geolocation = await page.setGeolocation({ latitude: 51.5, longitude: -0.1 });
    await page.goto('https://google.com', {
        waitUntil: 'networkidle2',
      });
    await page.pdf({ path: 'hn.pdf', format: 'a4' });


    // Navigate to a webpage
    await page.goto('https://google.com');

    // Do something with the page

    await browser.close();
})();