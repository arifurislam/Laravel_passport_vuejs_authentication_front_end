<template>
    <div class="content-body">
        <div class="container mt-3">
            <div class="row justify-content-center mt-5">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">Sign Up Form</h5>
                            <form @submit.prevent="hondleSignup">
                                <div class="form-group">
                                    <label>Name:</label>
                                    <input type="text" class="form-control" v-model="form.name" placeholder="name">
                                    <span class="text-danger mt-2 d-block" v-if="error.name">{{ error.name[0] }}</span>
                                </div>
                                <div class="form-group">
                                    <label>Email address:</label>
                                    <input type="email" class="form-control" v-model="form.email"
                                        placeholder="email address">
                                    <span class="text-danger mt-2 d-block" v-if="error.email">{{ error.email[0] }}</span>
                                </div>
                                <div class="form-group">
                                    <label>Phone Number:</label>
                                    <input type="text" class="form-control" v-model="form.phone" placeholder="+880 1">
                                    <span class="text-danger mt-2 d-block" v-if="error.phone">{{ error.phone[0] }}</span>
                                </div>
                                <div class="form-group">
                                    <label>Password:</label>
                                    <input type="password" class="form-control" v-model="form.password"
                                        placeholder="Password">
                                    <span class="text-danger mt-2 d-block" v-if="error.password">{{ error.password[0] }}</span>
                                </div>
                                <div class="form-group">
                                    <label>Re-Type Password:</label>
                                    <input type="password" class="form-control" v-model="form.password_confirmation"
                                        placeholder="re-type Password">
                                    <span class="text-danger mt-2 d-block" v-if="error.password_confirmation">{{ error.password_confirmation[0] }}</span>    
                                </div>
                                <button class="btn login-form__btn submit w-100 mb-3">Sign Up now</button>
                                <router-link class="text-primary" :to="{name : 'Login'}">Want A New Log WIth Old Account
                                    <b>Sign In Now</b></router-link>
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
                    name: null,
                    email: null,
                    phone: null,
                    password: null,
                    password_confirmation: null
                },
                error: {}
            }
        },
        methods: {
            hondleSignup() {
                this.$store.dispatch("SIGNUP", this.form)
                    .then((res) => {
                        this.$router.push({
                            name: 'Dashboard'
                        })
                    }).catch((err) => {
                        this.error = err.response.data.errors
                    })
            }
        }
    }
</script>

<style scoped>

</style>