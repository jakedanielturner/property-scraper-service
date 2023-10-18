import { getPropertyData } from "../service/getPropertyData.service";
import { parseHtml } from "../service/parseHtml.service";

export const handler = async () => {
    const res = await getPropertyData();

    console.log(res.data);

    const data = await parseHtml(res.data);

    return {
        statusCode: 200,
        body: "Hello from Lambda!"
    }
}

export default handler;
