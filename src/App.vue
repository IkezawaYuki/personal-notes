<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Signup from '@/components/auth/Signup'
export default {
  name: 'App',
  components:{
    Navbar,
    Signup
  }
}
</script>

<style>
@import "./css/reset.css";
@import "./css/personal.css";


</style>
