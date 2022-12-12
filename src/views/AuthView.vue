<template>
  <form action="" @submit.prevent>
    <stylized-input type="text" placeholder="Введите логин..."/>
    <stylized-input type="password" name="" id="" placeholder="Введите пароль..."/>
    <stylized-button @click="authUser">Войти</stylized-button>
  </form>
</template>

<script>
export default {
  methods: {
    authUser() {
      
      // backend code this

      this.$emit('authUser', this)
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