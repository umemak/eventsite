<template>
  <div id="EventCreate">
    <h1>イベント作成</h1>
    <ul>
      <li>タイトル: <input type="text" v-model="name" /></li>
      <li>開催日時: <input type="text" v-model="date" /></li>
      <li>開催場所: <input type="text" v-model="place" /></li>
      <li>
        公開期間: <input type="text" v-model="open" />～<input
          type="text"
          v-model="close"
        />
      </li>
    </ul>
    <button @click="createEvent">作成</button>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { createEvent } from "../graphql/mutations";

export default {
  name: "EventCreate",
  data() {
    return {
      name: "",
      date: "",
      place: "",
      open: "",
      close: "",
    };
  },
  methods: {
    async createEvent() {
      const { name, date, place, open, close } = this;
      const userID = this.$store.state.user.attributes.sub;
      if (!name || !date) return;
      const event = { name, date, place, open, close, userID };
      await API.graphql({
        query: createEvent,
        variables: { input: event },
      })
        .then((result) => {
          console.log(result);
          this.$router.push({ name: "Top" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
