<template>
  <div class="edit">
    <h1>イベント編集</h1>
    <ul>
      <li>タイトル: <input v-model="event.name" /></li>
      <li>開催日時: <input v-model="event.date" /></li>
      <li>開催場所: <input v-model="event.place" /></li>
      <li>
        公開期間: <input v-model="event.open" />～<input
          v-model="event.close"
        />
      </li>
    </ul>
    <button @click="eventUpdate">保存</button>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { getEvent } from "../graphql/queries";
import { updateEvent } from "@/graphql/mutations";

export default {
  name: "EventEdit",
  props: {
    eventId: String,
  },
  async created() {
    this.getEvent();
  },
  data() {
    return {
      event: {
        id: "",
        name: "",
        date: "",
        place: "",
        open: "",
        close: "",
      },
    };
  },
  methods: {
    async getEvent() {
      await API.graphql({
        query: getEvent,
        variables: { id: this.eventId },
      })
        .then((result) => {
          console.log(result);
          this.event.id = result.data.getEvent.id;
          this.event.name = result.data.getEvent.name;
          this.event.date = result.data.getEvent.date;
          this.event.place = result.data.getEvent.place;
          this.event.open = result.data.getEvent.open;
          this.event.close = result.data.getEvent.close;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async eventUpdate() {
      await API.graphql({
        query: updateEvent,
        variables: { input: this.event },
      })
        .then((result) => {
          console.log(result);
          this.$router.push({
            name: "Event",
            params: { eventId: this.event.id },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
