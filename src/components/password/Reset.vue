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
                            <form @submit.prevent="handleresetPassword">
                                <div class="form-group">
                                    <label>Password:</label>
                                    <input type="password" v-model="form.password" class="form-control"
                                        placeholder="Password">
                                    <span class="text-danger mt-2 d-block"
                                        v-if="error.password">{{ error.password[0] }}</span>
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password:</label>
                                    <input type="Password" v-model="form.password_confirmation" class="form-control"
                                        placeholder="Re-Type Password">
                                    <span class="text-danger mt-2 d-block"
                                        v-if="error.password_confirmation">{{ error.password_confirmation[0] }}</span>
                                </div>
                                <button class="btn login-form__btn submit w-100 mb-3">Submit Now</button>
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
                    password:'',
                    password_confirmation: '',
                    token:'',
                },
                error: {},
                success:'',
            }
        },
        created(){
            this.form.token = this.$route.query.token
        },
        methods: {
            handleresetPassword() {
                this.$store.dispatch("RESET", this.form)
                    .then((res) => {
                        this.success = res.data
                        this.error = ''
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