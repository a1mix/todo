<template>
  <form action="" @submit.prevent>
    <stylized-input
     @input="checkUserLogin"
     type="text"
     placeholder="Введите логин..."
    />
    <stylized-input
     type="password"
     name=""
     id=""
     placeholder="Введите пароль..."
     v-model="password"
    />
    <stylized-input
     type="password"
     name=""
     id=""
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
        checkUserLogin() {
            // if the user is not logged in db
            // do something
            if (this.login = '') {
                
            }
        },
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