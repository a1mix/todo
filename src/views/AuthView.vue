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
  </form>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      login: '',
    }
  },
  methods: {
    authUser() {
      try {
        // backend code this
        console.log(this.login, this.password)
        this.$emit('authUser', this)
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