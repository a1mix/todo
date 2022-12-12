<template>
  <nav>
    <router-link to="/">Главное</router-link>
    <router-link v-if="isUserAuthorized" to="/todos">Задачи</router-link>
    <router-link to="/auth">Вход</router-link>
    <router-link to="/regist">Регистрация</router-link>
    <stylized-button
      v-if="isUserAuthorized"
      class="exitBtn"
      @click="userExit"
    >
      Выйти
    </stylized-button>
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
    },
    userExit() {
      this.isUserAuthorized = false
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
  padding: 20px 30px;
  align-items: center;
  background: #2e2e2e;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  gap: 20px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.exitBtn {
  margin-left: auto;
}
</style>
