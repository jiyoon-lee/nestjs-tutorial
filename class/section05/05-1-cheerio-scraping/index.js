import axios from "axios";
import * as cheerio from "cheerio";

const createMessage = async () => {
  const url = "https://www.naver.com";

  const result = await axios.get(url);

  const $ = cheerio.load(result.data);
  $("meta").each((index, el) => {
    if ($(el).attr("property") && $(el).attr("property").includes("og:")) {
      const key = $(el).attr("property"); // og:title
      const value = $(el).attr("content");

      console.log(key, value);
    }
  });
};

createMessage();
