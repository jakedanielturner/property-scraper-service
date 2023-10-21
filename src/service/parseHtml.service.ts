import cheerio from "cheerio";
import { getPropertyPage } from "./getPropertyList.service";
// import pretty from "pretty";

export const parseListOfLinks = async (data: string) => {
    const $ = cheerio.load(data);
    
    const divsWithClass = $('div.propertyCard-details > a');

    const links: string[] = [];

    divsWithClass.each((i, div) => {
        const link = $(div).attr('href');

        if (link) {
            links.push(link)
        }
    })

    return links;
};

export const parsePropertyPage = async (link: string) => {
    const propertyHtml = await getPropertyPage(link);

    const $ = cheerio.load(propertyHtml.data);

    const divsWithClass = $('div._2uQQ3SV0eMHL1P6t5ZDo2q'); // This is the class of streetAddress

    const streetAddresses: string[] = [];

    divsWithClass.each((i, div) => {
        const streetAddress = $(div).text();

        streetAddresses.push(streetAddress);
    })

    return streetAddresses;

};
