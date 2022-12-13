<template>
  <form @submit.prevent>
    <stylized-input
     type="text"
     placeholder="Введите логин..."
     v-model="username"
     @input="checkUsernameFromDb"
    />

    <span v-if="!usernameIsUnique">Пользователь с таким ником уже существует</span>
    <span v-if="(username.length < 4)">Длина должна быть больше 3 символов</span>

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
     :style="passwordTrue"
    >
    Зарегистрироваться
    </stylized-button>
    <router-link to="/auth">Уже есть аккаунт?</router-link>
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
            username: '',
            password: '',
            repeatedPassword: '',
            id: Math.round(10+Math.random()*10),
            usernameIsUnique: true,
            registBtn: {},
        }
    },
    computed: {
        passwordTrue() {
            if (this.password == this.repeatedPassword && this.password.length > 3 && this.username.length >= 3) {
               return {
                 opacity: "1"
               }
            }
            return {
                opacity: "0.3"
            }
        },
    },
    methods: {
        checkUsernameFromDb() {
            if (this.users.length != 0) {
                this.users.forEach(user => {
                    if (user.username === this.username) {

                        // NEED TO FIX 
                        
                        console.log("WHY ISN'T IT WORKING!?")
                        this.usernameIsUnique = false
                        return false
                    }
                    
                })
            }
            // this.usernameIsUnique = true
            return true 
        },
        registUser() {
            if (this.checkUsernameFromDb() == true && this.password == this.repeatedPassword && this.password.length > 3 && this.username.length >= 3) {
                this.$emit('registUser', [this.id, this.username, this.password])
                this.id = Math.round(10+Math.random()*10)
                this.username = ""
                this.password = ""
                this.repeatedPassword = ""
                return
            }
            console.log('registration error')
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
    font-weight: bold;
}
</style>