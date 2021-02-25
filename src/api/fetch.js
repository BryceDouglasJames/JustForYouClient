import axios from "axios";

export function createPHPCallInstance({ baseUrl }) {
    return axios.create({
        baseURL: baseUrl,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}