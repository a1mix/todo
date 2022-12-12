<template>
  <form action="" @submit.prevent>
    <stylized-input type="text" />
    <stylized-input type="password" name="" id="" />
    <stylized-button>Войти</stylized-button>
  </form>
</template>

<script>
export default {

}
</script>

<style scoped> 
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
</style>