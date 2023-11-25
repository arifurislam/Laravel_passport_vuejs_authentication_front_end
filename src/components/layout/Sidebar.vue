<template>
    <div class="nk-sidebar">
        <div class="nk-nav-scroll">
            <ul class="metismenu" id="menu">
                <li>
                    <router-link :to="{name : 'Dashboard'}">
                        <i class="icon-speedometer menu-icon"></i>
                        <span class="nav-text">Dashboard</span></router-link>
                </li>
                <li>
                    <a href="#" @click.prevent="Logout">
                        <i class="icon-power menu-icon"></i>
                        <span class="nav-text">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        methods: {
            Logout() {
                this.$store.dispatch("LOGOUT")
                    .then((res) => {
                        this.$router.push({
                            name: 'Login'
                        })
                    })
            }
        }
    }
</script>

<style>

</style>