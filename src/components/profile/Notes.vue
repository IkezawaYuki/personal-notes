<template>
  <div>Hello world</div>
</template>


<script>
export default {
  name: 'Notes',
  data() {
    return {

    }
  },
  methods:{

  },
  created(){

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