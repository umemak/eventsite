<template>
    <div class="create">
        <h1>イベント作成</h1>
        <ul>
            <li>タイトル: <input v-model="title" /></li>
            <li>開催日時: <input v-model="date" /></li>
            <li>開催場所: <input v-model="place" /></li>
            <li>公開期間: <input v-model="open" />～<input v-model="close" /></li>
        </ul>
        <button @click="eventCreate">作成</button>
    </div>
</template>

<script>
export default {
  methods: {
    eventCreate: function() {

      this.$router.push('/event')
    },
  },
}
</script>