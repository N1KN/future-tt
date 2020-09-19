import {createQuery} from "../utils";

export default class LongFillService {
    _apiBase = 'http://www.filltext.com/';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getTableData = async () => {
        const queryObj = {
            rows: 1000,
            delay: 3,
            id: "{number|1000}",
            firstName: "{firstName}",
            lastName: "{lastName}",
            email: "{email}",
            phone: "{phone|(xxx)xxx-xx-xx}",
            address: "{addressObject}",
            description: "{lorem|32}"
        };

        return await this.getResource(createQuery(queryObj));
    };


}
