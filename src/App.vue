<template>
  <Navbar v-if="loggedInStatus"></Navbar>
  <Sidebar v-if="loggedInStatus"></Sidebar>

  <router-view></router-view>

  <Footer v-if="loggedInStatus"></Footer>

</template>
<script>

import Navbar from './components/layout/Navbar.vue';
import Sidebar from './components/layout/Sidebar.vue';
import Footer from './components/layout/Footer.vue';

export default{
  components:{
    Navbar,
    Sidebar,
    Footer,
  },
  // data(){
  //   return{
  //     auth:false
  //   }
  // }
  computed:{
    loggedInStatus(){
      return this.$store.getters.GET_AUTH_STATUS;
    }
  }
}
</script>
<style>

</style>
