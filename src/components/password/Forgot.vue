<template>
    <div class="content-body">
        <div class="container mt-3">
            <div class="row justify-content-center mt-5">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center mb-3">Reset Your Password</h5>
                            <div v-if="success">
                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        <span class="sr-only">Close</span>
                                    </button>
                                    <strong>{{success.message}}</strong>
                                </div>
                            </div>
                            <form @submit.prevent="handleFroget">
                                <div class="form-group">
                                    <label>Email address:</label>
                                    <input type="email" v-model="form.email" class="form-control"
                                        placeholder="email address">
                                    <span class="text-danger mt-2 d-block"
                                        v-if="error.email">{{ error.email[0] }}</span>
                                </div>
                                <button class="btn login-form__btn submit w-100 mb-3">Send Email</button>
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
                    email: null,
                },
                error: {},
                success:null,
            }
        },
        methods: {
            handleFroget() {
                this.$store.dispatch("FORGOT", this.form)
                    .then((res) => {
                        // console.log(res.data)
                        this.success = res.data
                        this.form.email = null
                    })
                    .catch((err) => {
                        this.error = err.response.data.errors
                    })

            }
        }
    }
</script>

<style scoped>

</style>