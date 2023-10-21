import axios from 'axios';
import { AxiosError } from 'axios';

const client = axios.create({
    baseURL: 'https://www.rightmove.co.uk',
});

export const getPropertyData = async () => {
    const res = await client.get<string>('property-to-rent/find.html?locationIdentifier=REGION^1229&sortType=6&savedSearchId=45953892&minBedrooms=1&maxPrice=1750&radius=0&propertyTypes=flat&includeLetAgreed=false');

    return res;
};

export const getPropertyPage = async (link: string) => {
    try {
        const res = await client.get<string>(link);

        return res;
    } catch (err) {
        if (err instanceof AxiosError) {
            console.log(err.response?.headers);
        }
    }
};
