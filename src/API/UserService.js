import axios from "axios";
import {API_URI} from "../hooks/http.hook";


export default class UserService {

    static _setTokenToHeader = (token) => {
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }

    static async logout(token) {
        try {
            await axios.get(`${API_URI}/auth/logout`, this._setTokenToHeader(token))
        } catch (e) {
            console.log(e.message)
        }
    }

    static async getMe(token) {
        try {
            const {data} = await axios.get(`${API_URI}/auth/me`, this._setTokenToHeader(token))
            return data
        } catch (e) {
            console.log(e.message)
        }

    }

    static async getUserById(id, token) {
        try {
            const {data} = await axios.get(`${API_URI}/users/${id}`, this._setTokenToHeader(token))
            return data
        } catch (e) {
            console.log(e.message)
        }

    };

    static async subscribe(userId, token) {
        try {
            await axios.get(`${API_URI}/subscriptions/${userId}/add`, this._setTokenToHeader(token))
        } catch (e) {
            console.log(e.message)
        }
    }

    static async unsubscribe(userId, token) {
        try {
            await axios.delete(`${API_URI}/subscriptions/${userId}/delete`, this._setTokenToHeader(token))
        } catch (e) {
            console.log(e.message)
        }
    }

    static async getSubscriptions(id) {
        try {
            const {data} = await axios.get(`${API_URI}/users/${id}/subscriptions`)
            return data
        } catch (e) {
            console.log(e.message)
        }
    }

    static async getLikedPosts(userId, token) {
        try {
            const {data} = await axios.get(`${API_URI}/users/${userId}/liked_posts`, this._setTokenToHeader(token))
            return data
        } catch (e) {
            console.log(e.message)
        }
    }

    static async updateProfile(id, token, body) {
        try {
            const {data} = await axios.patch(`${API_URI}/users/${id}`, {...body}, this._setTokenToHeader(token))
            return data
        } catch (e) {
            console.log(e.message)
        }
    }


}
