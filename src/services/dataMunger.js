const puppeteer = require('puppeteer');

export const getCards = (site) => (async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(
    `${site}`
  );

  await page.waitForSelector('img.cardSrc', {
    visible: true,
  });

  const data = await page.evaluate(() => {

    if(site === 
      'https://www.cardkingdom.com/mtg/adventures-in-the-forgotten-realms/singles?filter%5Bipp%5D=20&filter%5Bsort%5D=price_desc'
    ) {
      const img = document.querySelectorAll('img.cardSrc');
  
      const price = document.querySelectorAll('span.stylePrice');
  
      const urls = Array.from(img).map((v, i) => [v.src, price[i].innerHTML]);
  
      return urls;
    }

  });

  await browser.close();

  console.log(data);

  return data;
})();
