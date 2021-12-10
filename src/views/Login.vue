<template>
    <div class="login">
        <h1>ログイン</h1>
        <ul>
            <li>メールアドレス: <input v-model="mail" /></li>
            <li>パスワード: <input v-model="password" /></li>
        </ul>
        <button @click="login">ログイン</button>
    </div>
</template>

<script>
export default {
  methods: {
    login: function() {

      this.$router.push('/mypage')
    },
  },
}
</script>
