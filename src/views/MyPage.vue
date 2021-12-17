<template>
  <div class="mypage">
    <h1>マイページ</h1>
    <h3>作成済みイベント</h3>
    <div v-for="item in myEvents" :key="item.id">
      <router-link
        custom
        v-slot="{ navigate }"
        :to="{ name: 'Event', params: { eventId: item.id } }"
      >
        <button @click="navigate">{{ item.name }}@{{ item.place }}</button>
      </router-link>
      <router-link
        custom
        v-slot="{ navigate }"
        :to="{ name: 'EventEdit', params: { eventId: item.id } }"
      >
        <button @click="navigate">編集</button>
      </router-link>
    </div>
    <h3>エントリー済みイベント</h3>
    <li>
      <ul>
        <li>イベント１</li>
        <li>イベント２</li>
      </ul>
    </li>
    <button @click="eventCreate">イベント作成</button>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { listEvents } from "../graphql/queries";

export default {
  async created() {
    this.getMyEvents();
  },
  data() {
    return {
      myEvents: [],
    };
  },
  methods: {
    async getMyEvents() {
      const events = await API.graphql({
        query: listEvents,
      });
      this.myEvents = events.data.listEvents.items;
    },
    eventEdit: function () {
      this.$router.push("/edit");
    },
    eventCreate: function () {
      this.$router.push("/create");
    },
  },
};
</script>
