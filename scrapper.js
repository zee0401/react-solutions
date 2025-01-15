import axios from "axios";
import * as cheerio from "cheerio";

const scrapeIMDbTop250 = async () => {
  const url = "https://www.imdb.com/chart/top?ref_=nv_mv_250";

  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
    });

    const $ = cheerio.load(data);
    const movies = [];

    $(".lister-list tr").each((index, element) => {
      const title = $(element).find(".titleColumn a").text().trim();
      const year = $(element)
        .find(".titleColumn span")
        .text()
        .replace(/[()]/g, "")
        .trim();
      const rating = $(element).find(".imdbRating strong").text().trim();
      const movieUrl =
        "https://www.imdb.com" + $(element).find(".titleColumn a").attr("href");

      movies.push({
        title,
        year: parseInt(year, 10),
        rating: parseFloat(rating),
        url: movieUrl,
      });
    });

    return movies;
  } catch (error) {
    console.error("Error scraping IMDb:", error.message);
    throw error;
  }
};

scrapeIMDbTop250()
  .then((movies) => console.log(movies))
  .catch((error) => console.error(error));
