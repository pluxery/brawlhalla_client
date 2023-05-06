import axios from "axios";


export default  class WeaponService{
    static async getAllWeapons() {
        const result = await axios('http://127.0.0.1:8000/api/weapons',);
        return result.data
    };

    static async getWeaponById(id) {
        const result = await axios(`http://127.0.0.1:8000/api/weapons/${id}`);
        return result.data
    };
}