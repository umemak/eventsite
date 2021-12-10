<template>
    <div class="top">
        <h1>トップ</h1>
        <button @click="login">ログイン</button><br>
        <button @click="search">検索</button>
    </div>
</template>

<script>
export default {
  methods: {
    login: function() {

      this.$router.push('/login')
    },
    search: function() {

      this.$router.push('/search')
    },
  },
}
</script>
