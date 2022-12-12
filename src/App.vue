<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link v-if="isUserAuthorized" to="/todos">Todos</router-link> | 
    <router-link to="/auth">Auth</router-link>
  </nav>
  <router-view @authUser="openTodos"/>
</template>

<script>
export default {
  data() {
    return {
      isUserAuthorized: false
    }
  },
  methods: {
    openTodos() {
      this.isUserAuthorized = true
    }
  }
}

</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  padding: 30px;
  background: #2e2e2e;
  margin-bottom: 20px;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
