<template>
    <div class="create">
        <h1>イベント作成</h1>
        <ul>
            <li>タイトル: <input v-model="name" /></li>
            <li>開催日時: <input v-model="date" /></li>
            <li>開催場所: <input v-model="place" /></li>
            <li>公開期間: <input v-model="open" />～<input v-model="close" /></li>
        </ul>
        <button @click="createEvent">作成</button>
    </div>
</template>

<script>
import { API } from 'aws-amplify';
import { createEvent } from '../graphql/mutations';

export default {
  name: 'EventCreate',
  data(){
    return {
      name: '',
      date: '',
      place: '',
      open: '',
      close: ''
    }
  },
  methods: {
    async createEvent() {
      const { name, date, place, open, close } = this;
      if (!name || !date) return;
      const event = { name, date, place, open, close };
      await API.graphql({
        query: createEvent,
        variables: {input: event},
      });

      this.$router.push('/event')
    },
  },
}
</script>