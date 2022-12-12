<template>
  <form action="" @submit.prevent>
    <stylized-input
     @input="checkUserLogin"
     type="text"
     placeholder="Введите логин..."
    />
    <stylized-input type="password" name="" id="" placeholder="Введите пароль..."/>
    <stylized-input type="password" name="" id="" placeholder="Подтвердите пароль"/>
    <stylized-button @click="registUser">Зарегистрироваться</stylized-button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            login: ''
        }
    },
    methods: {
        checkUserLogin() {
            // if the user is not logged in db
            // do something
            if (this.login = '') {
                
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