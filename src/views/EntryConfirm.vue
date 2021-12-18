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
import { getEvent } from "../graphql/queries";
import { updateEvent } from "@/graphql/mutations";

export default {
  name: "EventEntry",
  props: {
    eventId: String,
  },
  async created() {
    this.getEvent();
    this.event.entrants.forEach((item) => {
      if (item.id == this.$store.state.user.id) {
        this.entried = true;
      }
    });
  },
  data() {
    return {
      entried: false,
      event: {
        id: "",
        name: "",
        entrants: [],
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
          this.event.entrants = result.data.getEvent.entrants;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async entry() {
      this.event.entrants.push({ id: this.$store.state.user.id, name: this.$store.state.user.name });
      await API.graphql({
        query: updateEvent,
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
