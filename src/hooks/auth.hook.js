import {useState, useCallback, useEffect} from 'react'

export const STORAGE = 'brawlhalla'



export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState({})

    const login = useCallback((jwtToken, userData) => {
        setToken(jwtToken)
        setUser(userData)
        localStorage.setItem(STORAGE, JSON.stringify({
            token: jwtToken,
            user: userData
        }))
    }, [])


    const logout = useCallback(() => {
        setToken(null)
        setUser({})
        localStorage.removeItem(STORAGE)
    }, [])

    useEffect(() => {
        //console.log('useAuth->useEffect activated!')
        const data = JSON.parse(localStorage.getItem(STORAGE))
        if (data && data.token && data.user) {
            login(data.token, data.user)
        }
    }, [login])

    return {login, logout, token, user}
}