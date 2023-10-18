import cheerio from "cheerio";
import pretty from "pretty";

export const parseHtml = async (data) => {
    const $ = cheerio.load(data);
    console.log(pretty($.html()))

    return $;
};
