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
    <stylized-button @click="authUser">Войти</stylized-button>
    <router-link to="/regist">Еще не заргестрированы?</router-link>
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
        const responce = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        console.log(responce.data)
        
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