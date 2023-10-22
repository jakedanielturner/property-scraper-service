import { getPropertyData } from "../service/getPropertyList.service";
import { parseListOfLinks, parsePropertyPage } from "../service/parseHtml.service";
import { mapSeries } from "../lib/mapSeriesFunction";

export const handler = async () => {
    const res = await getPropertyData();

    const data = await parseListOfLinks(res.data);

    const propertyData = mapSeries(data, async (link) => {
        const res = await parsePropertyPage(link).then((res) => console.log(res));
        console.log(res);
    })

    console.log(propertyData);

    return {
        statusCode: 200,
        body: "Hello from Lambda!"
    }
}

export default handler;
