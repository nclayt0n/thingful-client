import config from '../config'

const AuthApiService = {
    postLogin({ user_name, password }) {
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ user_name, password }),
        }
        console.log(options)
        return fetch(`${config.API_ENDPOINT}/auth/login`, options)
            .then(res =>
                console.log(res)
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) :
                res.json()
            )
    },
}

export default AuthApiService