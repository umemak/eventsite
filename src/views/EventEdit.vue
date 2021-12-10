<template>
    <div class="edit">
        <h1>イベント編集</h1>
        <ul>
            <li>タイトル: <input v-model="title" /></li>
            <li>開催日時: <input v-model="date" /></li>
            <li>開催場所: <input v-model="place" /></li>
            <li>公開期間: <input v-model="open" />～<input v-model="close" /></li>
        </ul>
        <button @click="eventUpdate">保存</button>
    </div>
</template>

<script>
export default {
  methods: {
    eventUpdate: function() {

      this.$router.push('/event')
    },
  },
}
</script>
