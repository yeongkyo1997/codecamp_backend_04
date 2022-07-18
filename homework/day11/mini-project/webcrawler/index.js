import puppeteer from "puppeteer"
import mongoose from "mongoose"
import { Starbucks } from "./models/starbucks.model.js"

// 몽고DB 접속!!!
mongoose.connect("mongodb://localhost:27017/mini-docker")

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 720 })
  await page.goto("https://www.starbucks.co.kr/menu/drink_list.do") // page에 html을 불러오고 저장하는 작업까지 함
  await page.waitForTimeout(1000) // 페이지의 데이터를 다운받아오는 것을 기다리는 작업, 데이터가 로드되기전에 크롤링이 이루어지면 원하는 데이터가 크롤링되지 않을 수 있음

  for (let i = 1; i <= 30; i++) {
    // menu
    const name = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dd`,
      (el) => el.textContent
    )
    // img
    const img = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dt > a > img`,
      (el) => el.src
    )

    console.log(`name: ${name}, img: ${img}`)

    // mongoDB에 데이터 저장
    const starbucks = new Starbucks({
      name,
      img,
    })
    await starbucks.save()
  }
  await browser.close()
}

startCrawling()
