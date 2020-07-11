<template>
  <div class="row">
    <template v-for="(event, index) in events">
      <div :key="index" class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{event.title}}</h5>
            <p class="card-text">{{"\u20B9"}}{{event.price}}</p>
            <p class="card-text">{{event.description}}</p>
            <button
              v-if="event.bookedBy.find(ev=>ev===userId)"
              class="btn btn-success"
              disabled
              :style="{cursor:'no-drop'}"
              title="Go to Bookings to manage your bookings"
            >Event booked</button>
            <button
              v-if="!event.bookedBy.find(ev=>ev===userId)"
              class="btn btn-primary"
              @click="book"
            >Book Event</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      events: null,
      userId: null
    };
  },
  methods: {
    getEvents() {
      const reqBody = {
        query: `
            query{
              events{
                _id
                title
                description
                date
                price
                bookedBy
                creator{
                  email
                  _id
                }
              }
            }
            `
      };
      fetch("http://localhost:5000/graphql", {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          if (res.status !== 200 && res.status !== 201) {
            // setLoading(false);
            throw new Error("Failed!");
          }
          return res.json();
        })
        .then(res => {
          console.log(res);
          if (res && res.data.events && res.data.events.length) {
            this.events = res.data.events;
            // setEvents(res.data.events);
            // setActualEvents(res.data.events);
            // if (userId) {
            //   getBookings();
            // }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    book() {
      console.log("asd");
    }
  },
  mounted() {
    this.userId = this.$store.getters.getAuthData.userId;
    this.getEvents();
  }
};
</script>