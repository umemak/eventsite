<template>
  <div class="entry">
    <h1>エントリー確認</h1>

    <div v-if="entried">エントリー済みです</div>
    <div v-else>
      {{ event.name }}にエントリーします <button @click="entry">実行</button>
    </div>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { getEvent, getUser } from "../graphql/queries";
import { createEventUser } from "../graphql/mutations";

export default {
  name: "EventEntry",
  props: {
    eventId: String,
  },
  async created() {
    this.getEvent();
    this.getUser();
    this.event.entrants.forEach((item) => {
      if (item.id == this.$store.state.user.id) {
        this.entried = true;
      }
    });
  },
  data() {
    return {
      entried: false,
      event: null,
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
          this.event = result.data.getEvent;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getUser() {
      await API.graphql({
        query: getUser,
        variables: { id: this.$store.state.user.id },
      })
        .then((result) => {
          console.log(result);
          this.user = result.data.getUser;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async entry() {
      await API.graphql({
        query: createEventUser,
        variables: { input: this.event },
      })
        .then((result) => {
          console.log(result);
          this.$router.push({
            name: "Event",
            params: { eventId: this.eventId },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
