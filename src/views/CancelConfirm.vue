<template>
  <div class="cancel">
    <h1>キャンセル確認</h1>

    <div v-if="entried">未エントリーです</div>
    <div v-else>
      {{ eventName }}をキャンセルします <button @click="entry">実行</button>
    </div>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { getEvent, listEventUsers } from "../graphql/queries";
import { updateEventUser } from "../graphql/mutations";

export default {
  name: "EventCencel",
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
      eventName: "",
      eventUserID: "",
      eventUser: {
        id: "",
        status: "",
        eventID: "",
        userID: "",
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
          this.eventName = result.data.getEvent.name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getEventUser() {
      let filter = {
        and: [
          { eventID: { eq: this.eventID } },
          { userID: { eq: this.$store.state.user.attributes.sub } },
        ],
      };
      await API.graphql({
        query: listEventUsers,
        variables: { filter: filter },
      })
        .then((result) => {
          console.log(result);
          this.entried = true;
          this.eventUser.id = result.data.getEventUser.id;
          this.eventUser.status = result.data.getEventUser.status;
          this.eventUser.eventID = result.data.getEventUser.eventID;
          this.eventUser.userID = result.data.getEventUser.userID;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async entry() {
      this.eventUser.status = "cancel";
      console.log(this.eventUser);
      await API.graphql({
        query: updateEventUser,
        variables: { input: this.eventUser },
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
