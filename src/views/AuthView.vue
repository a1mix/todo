<template>
  <form action="" @submit.prevent>
    <stylized-input
     type="text"
     placeholder="Введите логин..."
     v-model="username"
    />
    <stylized-input
     type="password"
     placeholder="Введите пароль..."
     v-model="password"
    />
      <stylized-button
      @click="authUser"
      > 
        Войти
      </stylized-button>
    <span v-if="!isAuthTrue">Неправильный логин или пароль</span>
    <router-link to="/regist">Еще не зарегистрированы?</router-link>
  </form>
</template>

<script>
export default {
  props: {
    users: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      password: '',
      username: '',
      isAuthTrue: true
    }
  },
  methods: {
    authUser() {
      this.users.forEach((user) => {
        if (user.password  == this.password && user.username == this.username) {
          this.$emit('authUser', user.id)
          this.isAuthTrue = true
          return 
        }
      })
      console.log("auth error")
      this.isAuthTrue = false
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
span {
    font-size: 12px;
    color: rgba(221, 3, 3, 0.646);
    font-weight: bold;
}
</style>