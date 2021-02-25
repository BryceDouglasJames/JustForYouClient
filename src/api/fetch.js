import axios from "axios";

export function createPHPCallInstance({ baseUrl }) {
    return axios.create({
        baseURL: baseUrl,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            //"Content-Type":"application/x-www-form-urlencoded",
            //"Access-Control-Allow-Origin":  "*",
            //"Access-Control-Allow-Headers": "Content-Type, origin",
            //'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
}