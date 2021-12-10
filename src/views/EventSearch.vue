<template>
    <div class="search">
        <h1>検索</h1>
        <ul>
            <li>キーワード: <input v-model="keyword" /></li>
        </ul>
        <button @click="search">検索</button>
    </div>
</template>

<script>
export default {
  methods: {
    search: function() {

      this.$router.push('/search')
    },
  },
}
</script>
