<template>
    <div class="entry">
        <h1>エントリー確認</h1>
        <button @click="entry">エントリー実行</button><br>
    </div>
</template>

<script>
export default {
  methods: {
    entry: function() {

      this.$router.push('/mypage')
    },
  },
}
</script>
