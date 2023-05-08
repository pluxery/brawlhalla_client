import {useState, useCallback, useEffect} from 'react'

export const STORAGE = 'brawlhalla'



export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState({})


    const login = useCallback((accessToken, userData) => {
        setToken(accessToken)
        setUser(userData)
        localStorage.setItem(STORAGE, JSON.stringify({
            token: accessToken,
            user: userData
        }))
    }, [])



    const logout = useCallback(() => {
        setToken(null)
        setUser({})
        localStorage.removeItem(STORAGE)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(STORAGE))
        if (data && data.token && data.user.original) {
            login(data.token, data.user.original)
        }
    }, [login])

    return {login, logout, token, user}
}