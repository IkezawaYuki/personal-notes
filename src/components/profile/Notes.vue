<template>
  <div class="index container">
              
    <div class="card" v-for="person in people" :key="person.id">
      <div class="card-content">
        <h2 class="indigo-text">{{ person.name }}</h2>
        <p class="indigo-text">{{ person.name_kana }}</p>
        <p class="indigo-text">{{ person.mail }}</p>
        <p class="indigo-text">{{ person.sex }}</p>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{name:'Edit'}">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>


<script>
import db from '@/firebase/init'
export default {
  name: 'Notes',
  data() {
    return {
      people: []
    }
  },
  methods:{

  },
  created(){
    db.collection("person").get().then(snapshot => {
      snapshot.forEach(doc => {
        let person = doc.data()
        person.id = doc.id
        console.log(person)
        this.people.push(person)
      })
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>


<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  margin-top: 0;
}
.index .ingredients{
  margin: 30px auto;
}
.index .ingredients li{
  display: inline-block;
}

.index .delete{
  position:absolute;
  top:4px;
  right:4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>