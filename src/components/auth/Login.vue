<template>
  <div class="login container">
    <form @submit.prevent="login" class="card-panel">
      <h2 class="deep-purple-text center">ログイン</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="text" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <p class="red-text center" v-if="feedback">{{feedback}}</p>
      <div class="field center">
        <button class="btn deep-purple">ログイン</button>
      </div>
    </form>
  </div>
</template>


<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data(){
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  methods:{
    login(){
      if(this.email && this.password){
        this.feedback = null
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((cred) => {
          console.log(cred.user)
          this.$router.push({ name: 'Notes'})
        })
        .catch(err => {
          this.feedback = err.message
        })
      }else{
        this.feedback = "Email、PassWordの入力をしてください"
      }
    }
  }
}
</script>

<style>
.login{
  max-width: 400px;
  margin-top: 60px;
}
.login h2{
  font-size: 2.4em;
}
.login field{
  margin-bottom: 16px;
}

</style>
