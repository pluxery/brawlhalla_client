import {useState, useCallback, useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {STORAGE} from './auth.hook'


export const API_URI = "http://127.0.0.1:8000/api"
export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const auth = useContext(AuthContext)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            if (auth.token) {
                headers["Authorization"] = `Bearer ${auth.token}`
            }

            let response = await fetch(`${API_URI}${url}`, {method, body, headers})
            let data = await response.json()
            if (!response.ok && response.status === 401) {
                setError(data.message)
                throw new Error('Неверный логин или пароль!')
            }
            if (!response.ok && response.status === 422) {
                setError(data.message)
                throw new Error('Пользователь с такой почтой уже существует!')
            }
            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [auth.token, auth.user])

    const clearError = useCallback(() => setError(null), [])
    return {loading, request, error, clearError}
}