import cheerio from "cheerio";
import axios from "axios";

export async function scrapingOG(url) {
  const ogScrap = {};
  
  // axios.get으로 html 코드 받아오기
  const result = await axios.get(url);
  // console.log(result.data);

  // 스크래핑 결과에서 OG 코드 골라내기
  const $ = cheerio.load(result.data);
  $("meta").each((_, el) => {
    if ($(el).attr("property")?.includes("og:")) {
      const key = $(el).attr("property").split(":")[1]; // [og:]의 뒷부분을 key값으로 저장
      const value = $(el).attr("content");
      // console.log(`${key} : ${value}`);
      if (key === "title" || key === "image" || key === "description")
        ogScrap[key] = value;
    }
  });
  return ogScrap;
}

scrapingOG("http://www.naver.com");
