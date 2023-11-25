import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api/auth';
export const auth = {
    state: {
        auth_status: false,
        auth_token: null,
        auth_info: {
            name: null,
            email: null,
            phone: null,
            image: null,
        }
    },
    getters: {

        GET_AUTH_STATUS(state) {
            return state.auth_status;
        },

        GET_AUTH_TOKEN(state) {
            return state.auth_token;
        },

        GET_AUTH_INFO(state) {
            return state.auth_info;
        }

    },

    actions: {
        LOGIN(context, loginData) {
            return new Promise((resolve, reject) => {
                axios.post('/login',loginData)
                    .then((res) => {
                        context.commit('SET_AUTH_TOKEN', res.data.access_token)
                        context.commit('SET_AUTH_INFO', res.data.user)
                        resolve(res)
                    }).catch((err) => {
                        reject(err)
                    });
            })
        },
        RESET(context, resetData) {
            return new Promise((resolve, reject) => {
                axios.post('/reset', resetData)
                    .then((res) => {
                        resolve(res)
                    }).catch((err) => {
                        reject(err)
                    });
            })
        },

        FORGOT(contenxt, forgotData) {
            return new Promise((resolve, reject) => {
                axios.post('/forgot', forgotData)
                    .then((res) => {
                        // console.log(res.data)
                        resolve(res)
                    }).catch((err) => {
                        reject(err)
                        // console.log(err.response.data.errors)
                    });
            })
        },
        SIGNUP(context, signupData) {
            return new Promise((resolve, reject) => {
                axios.post('/signup', signupData)
                    .then((res) => {
                        context.commit('SET_AUTH_TOKEN', res.data.access_token)
                        context.commit('SET_AUTH_INFO', res.data.user)
                        resolve(res)
                    }).catch((err) => {
                        reject(err)
                    });
            })
        },
        LOGOUT(context) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.auth_token;
                axios.post('/logout')
                    .then((res) => {
                        context.commit('SET_AUTH_LOGOUT', res.data.access_token)
                        resolve(res)
                    }).catch((err) => {
                        reject(err)
                        // console.log(err.response.data.errors)
                    });
            })
        }
    },

    mutations: {
        SET_AUTH_TOKEN(state, token) {
            state.auth_token = token
            state.auth_status = true
        },
        SET_AUTH_INFO(state, info) {
            state.auth_info.name = info.name
            state.auth_info.email = info.email
            state.auth_info.phone = info.phone
            state.auth_info.image = info.photo
        },
        SET_AUTH_LOGOUT(state) {
            state.auth_token = null;
            state.auth_status = false;
            state.auth_info = {
                name: null,
                email: null,
                phone: null,
                image: null,
            }
        }
    },
}