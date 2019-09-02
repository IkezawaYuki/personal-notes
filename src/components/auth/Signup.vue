<template>
  <div class="signup container">
    <form @submit.prevent="signup" class="card-panel">
      <h2 class="center deep-purple-text">新規登録</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="text" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias">
      </div>
      <p class="red-text center" v-if="feedback">{{ feedback}}</p>
      <div class="field center">
        <button class="btn deep-purple">新規登録</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
import functions from 'firebase/functions'

export default {
  name: 'Signup',
    data(){
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    }
  },
  methods:{
    signup(){
      if(this.alias && this.email && this.password){
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        let checkAlias = firebase.functions().httpsCallable('checkAlias')
        checkAlias({ slug: this.slug}).then(result => {
          console.log(result)
          if(!result.data.unique){
            this.feedback = "このaliasはすでに登録済みです。"
          }else{
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              db.collection('users').doc(this.slug).set({
                alias: this.alias,
                getlocation: null,
                user_id: cred.user.uid
              })
            })
            .then(() => {
              this.$router.push({name: 'Notes'})
            })
            .catch((err) => {
              console.log(err)
              this.feedback = err.message
            })
            this.feedback = "this alias is free to use"
          }
        })
      }else{
        this.feedback = "全項目を入力してください"
      }
    }
  }
}
</script>

<style>
.signup{
  max-width: 400px;
  margin-top: 60px;
}
.signup h2{
  font-size: 2.4em;
}

.signup .field{
  margin-bottom: 16px;
}

</style>
