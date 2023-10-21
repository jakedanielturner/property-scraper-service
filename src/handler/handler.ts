import { getPropertyData } from "../service/getPropertyList.service";
import { parseListOfLinks, parsePropertyPage } from "../service/parseHtml.service";

export const handler = async () => {
    const res = await getPropertyData();

    const data = await parseListOfLinks(res.data);

    const propertyData = data.map(async (link: string) => {
        const propertyData = await parsePropertyPage(link);

        return propertyData;
    });

    console.log(propertyData);

    return {
        statusCode: 200,
        body: "Hello from Lambda!"
    }
}

export default handler;
