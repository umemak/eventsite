<template>
  <div class="top">
    <h1>トップ</h1>
    <button @click="login">ログイン</button><br />
    <button @click="search">検索</button>

    <div v-for="item in events" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.place }}</p>
    </div>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { listEvents } from "../graphql/queries";

export default {
  name: "Top",
  async created() {
    this.getEvents();
  },
  data() {
    return {
      events: [],
    };
  },
  methods: {
    login: function () {
      this.$router.push("/login");
    },
    search: function () {
      this.$router.push("/search");
    },
    async getEvents() {
      const events = await API.graphql({
        query: listEvents,
      });
      this.events = events.data.listEvents.items;
    },
  },
};
</script>
