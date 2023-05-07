import axios from "axios";


export default  class UserService{
    static async getUsers() {
        const result = await axios('http://127.0.0.1:8000/api/posts',);
        return result.data
    };

    static async getUserById(id) {
        const result = await axios(`http://127.0.0.1:8000/api/users/${id}`);
        return result.data
    };

}
