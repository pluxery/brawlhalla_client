import axios from "axios";


export default class LegendService {
    static async getAllLegends() {
        try {
            const {data} = await axios('http://127.0.0.1:8000/api/legends',);
            return data
        } catch (e) {
            console.log(e.message)
        }
    };

    static async getLegendBuId(id) {
        try {
            const {data} = await axios(`http://127.0.0.1:8000/api/legends/${id}`);
            return data
        } catch (e) {
            console.log(e.message)

        }
    };
}