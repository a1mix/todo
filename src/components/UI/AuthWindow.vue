<template>
  <form class="authentication">
      <stylized-input type="text" />
      <stylized-input type="password" />
      <button>
        Зарегистрироваться
      </button>
    </form>
</template>

<script>
export default {
name: "auth-window"
}
</script>

<style>
.authentication {
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

</style>