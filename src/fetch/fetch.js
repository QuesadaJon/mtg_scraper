const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(
    'https://www.cardkingdom.com/mtg/adventures-in-the-forgotten-realms/singles'
  );

  await page.waitForSelector('img.cardSrc', {
    visible: true,
  });

  const data = await page.evaluate(() => {

    const img = document.querySelectorAll('img.cardSrc');

    const price = document.querySelectorAll('span.stylePrice');

    const urls = Array.from(img).map((v, i) => [v.src, price[i].innerHTML]);

    return urls;

  });

  await browser.close();

  console.log(data);

  return data;
})();
