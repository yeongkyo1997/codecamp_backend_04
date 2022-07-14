import puppeteer from "puppeteer";
import mongoose from "mongoose";
import { Stock } from "./models/stock.model.js";

// 몽고DB 접속!!!
mongoose.connect("mongodb://localhost:27017/mydocker04");

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("https://finance.naver.com/item/sise.naver?code=005930"); // page에 html을 불러오고 저장하는 작업까지 함
  await page.waitForTimeout(1000); // 페이지의 데이터를 다운받아오는 것을 기다리는 작업, 데이터가 로드되기전에 크롤링이 이루어지면 원하는 데이터가 크롤링되지 않을 수 있음
  const framePage = page
    .frames()
    .find((el) => el.url().includes("/item/sise_day.naver?code=005930")); // 찾으려고하는 데이터가 속한 iframe을 가져와야한다.

  for (let i = 3; i <= 7; i++) {
    const date = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`,
      (el) => el.textContent
    ); // date
    const price = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,
      (el) => el.textContent
    ); // price

    console.log(`날짜: ${date}, 가격: ${price}`);

    // mongoDB에 데이터 저장
    const stock = new Stock({
      name: "삼성전자",
      date: date,
      price: Number(price.replace(",", "")),
    });
    await stock.save();
  }
  await browser.close();
}

startCrawling();
