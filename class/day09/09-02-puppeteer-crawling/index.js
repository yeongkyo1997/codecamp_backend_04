import puppeteer from "puppeteer";

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("https://www.goodchoice.kr/product/search/2"); // page에 html을 불러오고 저장하는 작업까지 함
  await page.waitForTimeout(1000); // 페이지의 데이터를 다운받아오는 것을 기다리는 작업, 데이터가 로드되기전에 크롤링이 이루어지면 원하는 데이터가 크롤링되지 않을 수 있음

  const stage = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
    (el) => el.textContent
  );
  const location = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
    (el) => el.textContent
  );
  const price = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
    (el) => el.textContent
  );

  console.log(stage.trim());
  console.log(location.trim());
  console.log(price.trim());
  await browser.close();
}

startCrawling();
