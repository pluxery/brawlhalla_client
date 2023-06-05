import axios from "axios";
import {API_URI} from "../hooks/http.hook";


export default class PostService {

    static _setTokenToHeader = (token, ) => {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    }


    static async getAllPosts(page = 1, query = '') {

        try {
            const {data} = await axios(`${API_URI}/posts?page=${page}${query}`,);
            return data
        } catch (e) {
            console.log(e.message)
        }
    };

    static async getPostsByUserId(userId) {
        try {
            const {data} = await axios(`${API_URI}/posts?author=${userId}`);
            return data
        } catch (e) {
            console.log(e.message)
        }
    }

    static async getPostById(id) {
        try {
            const result = await axios(`${API_URI}/posts/${id}`);
            return result.data
        } catch (e) {
            console.log(e.message)
        }
    };

    static async editPostById(post, body, token) {
        try {

            await axios.post(`${API_URI}/posts/${post.id}/edit`, body, this._setTokenToHeader(token)
            )
        } catch (e) {
            console.log(e.message)
        }
    }

    static async createPost(body, token) {
        try {
            await axios.post(`${API_URI}/posts/`, body, this._setTokenToHeader(token))
        } catch (e) {
            console.log(e.message)
        }
    }

    static async deletePostById(id, token) {
        try {
            await axios.delete(`${API_URI}/posts/${id}`, this._setTokenToHeader(token)
            )
        } catch (e) {
            console.log(e.message)
        }
    }

    static async toggleLikePost(id, token) {
        try {
            await axios(`${API_URI}/posts/${id}/like`, this._setTokenToHeader(token)
            )
        } catch (e) {
            console.log(e.message)
        }
    }

    static async addComment(id, body, token) {
        try {
            await axios.post(`${API_URI}/posts/${id}/comment`, {...body}, this._setTokenToHeader(token))
        } catch (e) {
            console.log(e.message)
        }
    }

}