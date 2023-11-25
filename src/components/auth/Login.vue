<template>
    <div class="content-body">
        <div class="container mt-3">
            <div class="row justify-content-center mt-5">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center mb-3">Sign In Form</h5>
                            <!-- <div v-if="error.loginError">
                                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        <span class="sr-only">Close</span>
                                    </button>
                                    <strong>{{error.loginError}}</strong>
                                </div>
                            </div> -->
                            <form @submit.prevent="handleLogin">
                                <div class="form-group">
                                    <label>Email address:</label>
                                    <input type="email" v-model="form.email" class="form-control"
                                        placeholder="email address">
                                    <span class="text-danger mt-2 d-block"
                                        v-if="error.email">{{ error.email[0] }}</span>
                                </div>
                                <div class="form-group">
                                    <label>Password:</label>
                                    <input type="password" v-model="form.password" class="form-control"
                                        placeholder="Password">
                                    <span class="text-danger mt-2 d-block"
                                        v-if="error.password">{{ error.password[0] }}</span>
                                </div>
                                <button class="btn login-form__btn submit w-100 mb-3">Log In now</button>
                                <router-link class="text-primary mb-3 d-block" :to="{name : 'Signup'}">Want A New Account <b>Sign
                                        Up</b></router-link>
                                <router-link class="text-primary d-block" :to="{name : 'Forgot'}">
                                    <b>Reset Password</b>
                                </router-link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: null,
                    password: null
                },
                error: {}
            }
        },
        methods: {
            handleLogin() {
                this.$store.dispatch("LOGIN", this.form)
                    .then((res) => {
                        this.$router.push({
                            name: 'Dashboard'
                        })
                        // console.log(res.data)
                    })
                    .catch((err) => {
                        // console.log(err.response.data.errors)
                        // this.error = err.response.data.errors
                    })

            }
        }
    }
</script>

<style scoped>

</style>