import axios from "axios";
import * as cheerio from "cheerio";

// Function to scrape IMDb Top 250 Movies

const scrapeIMDbTop250 = async () => {
  const url = "https://www.imdb.com/chart/top?ref_=nv_mv_250";

  try {
    const { data } = await axios.get(url);
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
      const url =
        "https://www.imdb.com" + $(element).find(".titleColumn a").attr("href");

      movies.push({
        title,
        year: parseInt(year, 10),
        rating: parseFloat(rating),
        url,
      });
    });

    return movies;
  } catch (error) {
    console.error("Error scraping IMDb:", error);
    throw error;
  }
};
