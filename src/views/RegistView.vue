<template>
  <form @submit.prevent>
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
    <stylized-input
     type="password"
     placeholder="Подтвердите пароль"
     v-model="repeatedPassword"
    />
    <stylized-button @click="registUser">Зарегистрироваться</stylized-button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            login: '',
            password: '',
            repeatedPassword: ''
        }
    },
    methods: {
        registUser() {
            console.log(this.login, this.password, this.repeatedPassword)
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