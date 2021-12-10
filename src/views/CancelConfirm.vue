<template>
    <div class="cancel">
        <h1>キャンセル確認</h1>
        <button @click="cancel">キャンセル実行</button><br>
    </div>
</template>

<script>
export default {
  methods: {
    cancel: function() {

      this.$router.push('/event')
    },
  },
}
</script>
