import axios from "axios";


export default  class PostService{
    static async getAllPosts() {
        const result = await axios('http://127.0.0.1:8000/api/posts',);
        return result.data
    };

    static async getPostById(id) {
        const result = await axios(`http://127.0.0.1:8000/api/posts/${id}`);
        return result.data
    };
}