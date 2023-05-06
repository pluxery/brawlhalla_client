import axios from "axios";


export default  class LegendService{
    static async getAllLegends() {
        const result = await axios('http://127.0.0.1:8000/api/legends',);
        return result.data
    };

    static async getLegendBuId(id) {
        const result = await axios(`http://127.0.0.1:8000/api/legends/${id}`);
        return result.data
    };
}