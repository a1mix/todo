<template>
  <nav>
    <router-link to="/">Главное</router-link>
    <router-link v-if="isUserAuthorized" to="/todos">Задачи</router-link>
    <router-link
     v-if="!isUserAuthorized"
     to="/auth"
    >
      Вход
    </router-link>
    <router-link to="/regist">Регистрация</router-link>
    <router-link
      v-if="isUserAuthorized"
      class="exitBtn"
      @click="userExit"
      to="/auth"
    >
      Выйти
    </router-link>
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
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
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
  color: #ffffff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #974ae4;
}

.exitBtn {
  margin-left: auto;
}
</style>
