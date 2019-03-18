<template>
  <div id="app">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,700');
$grey: #252525;

* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Fira Sans', sans-serif;
  color: $grey;
}
</style>
