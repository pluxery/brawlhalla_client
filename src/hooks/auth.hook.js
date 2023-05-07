import {useState, useCallback, useEffect} from 'react'

const storageName = 'auth_storage'



export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState({})
    const login = useCallback((accessToken, userData) => {
        setToken(accessToken)
        setUser(userData)
        localStorage.setItem(storageName, JSON.stringify({
            token: accessToken,
            user: userData
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUser({})
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token && data.user.original) {
            login(data.token, data.user.original)
        }
    }, [login])

    return {login, logout, token, user}
}