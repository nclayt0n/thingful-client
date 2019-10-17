// import config from '../config'

const AuthApiService = {
    postLogin({ user_name, password }) {
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ user_name, password }),
        }
        return fetch(`http://localhost:8000/api/auth/login`, options)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e) && console.log('not succesful')) :
                res.json()
            )
    },
}
export default AuthApiService