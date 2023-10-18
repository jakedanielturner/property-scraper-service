import axios from 'axios';

export const getPropertyData = async () => {
    const client = axios.create({
        baseURL: 'https://www.rightmove.co.uk',
    });

    const res = await client.get('/property-to-rent/find.html?searchType=RENT&locationIdentifier=REGION^1229&insId=1&radius=0.0&minPrice=&maxPrice=&minBedrooms=&maxBedrooms=&displayPropertyType=&maxDaysSinceAdded=&sortByPriceDescending=&_includeLetAgreed=on&primaryDisplayPropertyType=&secondaryDisplayPropertyType=&oldDisplayPropertyType=&oldPrimaryDisplayPropertyType=&letType=&letFurnishType=&houseFlatShare=');

    return res;
};
