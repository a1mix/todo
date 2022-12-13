<template>
  <form @submit.prevent>
    <stylized-input
     type="text"
     placeholder="Введите логин..."
     v-model="login"
     @input="checkLoginFromDb"
    />
    <span v-if="!loginIsUnique">{{attentionText}}</span>
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
    <stylized-button
     @click="registUser"
     v-if="passwordTrue"
     :style="registBtn"
    >
    Зарегистрироваться
    </stylized-button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            login: '',
            password: '',
            repeatedPassword: '',
            loginIsUnique: true,
            registBtn: {
                opacity: 1
            },
            attentionText: 'Пользователь с таким ником уже существует'
        }
    },
    computed: {
        passwordTrue() {
            if (this.password == this.repeatedPassword) {
                return this.registBtn.opacity = 1
            }
            return this.registBtn.opacity = 0.3
        },
        
    },
    methods: {
        registUser() {
            // example code
            console.log(this.login, this.password, this.repeatedPassword)

            // backend code
        },
        checkLoginFromDb() {
            // example code
            if (this.login != "aimixess" && this.login != "ramilka") {
               return this.loginIsUnique = true
            }
            this.loginIsUnique = false
            
            // backend code
        },
    },
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
    
}
</style>