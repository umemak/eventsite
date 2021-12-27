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
import { getEvent, getEventUser } from "../graphql/queries";
import { createEventUser } from "../graphql/mutations";

export default {
  name: "EventEntry",
  props: {
    eventId: String,
  },
  async created() {
    this.getEvent();
    this.getEventUser();
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
    async getEventUser() {
      await API.graphql({
        query: getEventUser,
        variables: { eventID: this.eventId, userID: this.$store.state.user.id },
      })
        .then((result) => {
          console.log(result);
          this.entried=true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async entry() {
      await API.graphql({
        query: createEventUser,
        variables: { input: {eventID: this.eventId, userID: this.$store.state.user.id, status: "entry"} },
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
