import axios from "axios";
import { API_URI } from "../hooks/http.hook";


export default class LegendService {
    static _setTokenToHeader = (token,) => {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    }

    static async getAllLegends() {
        try {
            const { data } = await axios('http://127.0.0.1:8000/api/legends',);
            return data
        } catch (e) {
            console.log(e.message)
        }
    };

    static async setRating(id, rating, token) {
        try {

            await axios.post(`${API_URI}/legends/${id}/update_rating`,
                rating, this._setTokenToHeader(token)
            )
        } catch (e) {
            console.log(e.message)
        }
    };

    static async getLegendById(id) {
        try {
            const { data } = await axios(`http://127.0.0.1:8000/api/legends/${id}`);
            return data
        } catch (e) {
            console.log(e.message)

        }
    };
}