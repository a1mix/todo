<template>
  <form action="" @submit.prevent>
    <stylized-input
     type="text"
     placeholder="Введите логин..."
     v-model="login"
    />
    <stylized-input
     type="password"
     placeholder="Введите пароль..."
     v-model="password"
    />
   
    <router-link to="/">
      <stylized-button
      @click="authUser"
      > 
        Войти
      </stylized-button>
    </router-link>
   
    <router-link to="/regist">Еще не зарегистрированы?</router-link>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      password: '',
      login: '',
    }
  },
  methods: {
    async authUser() {
      try {
        this.$emit('authUser', [this.login, this.password])
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>

<style scoped> 
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
</style>