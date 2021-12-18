<template>
  <div class="event">
    <h1>イベント詳細</h1>
    <ul>
      <li>タイトル: {{ event.name }}</li>
      <li>開催日時: {{ event.date }}</li>
      <li>開催場所: {{ event.place }}</li>
      <li>
        資料:
        <ul>
          <li>資料１</li>
          <li>資料２</li>
        </ul>
      </li>
      <li>
        コメント:
        <ul>
          <li>コメント１</li>
          <li>コメント２</li>
        </ul>
      </li>
      <li>
        参加者:
        <ul>
          <div v-for="item in event.entrants" :key="item.id">
            <li>{{ item.name }}</li>
          </div>
        </ul>
      </li>
    </ul>
    <router-link
      custom
      v-slot="{ navigate }"
      :to="{ name: 'Entry', params: { eventId: eventId } }"
    >
      <button @click="navigate">参加エントリー</button>
    </router-link>
    <router-link
      custom
      v-slot="{ navigate }"
      :to="{ name: 'Cancel', params: { eventId: eventId } }"
    >
      <button @click="navigate">参加キャンセル</button>
    </router-link>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { getEvent } from "../graphql/queries";

export default {
  name: "Event",
  props: {
    eventId: String,
  },
  async created() {
    this.getEvent();
  },
  data() {
    return {
      event: {
        name: "",
        date: "",
        place: "",
        entrants: [],
      },
    };
  },
  methods: {
    async getEvent() {
      console.log(this.eventId);
      await API.graphql({
        query: getEvent,
        variables: { id: this.eventId },
      })
        .then((result) => {
          console.log(result);
          this.event = result.data.getEvent;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
