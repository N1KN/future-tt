import {createQuery} from "../utils";

export default class ShortFillService {
    _apiBase = '//www.filltext.com/';

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
            rows: 32,
            delay: 0,
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
