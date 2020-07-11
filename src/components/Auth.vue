<template>
  <form class="form-signin" @submit="auth">
    <img class="mb-4" src="../assets/images/events.jpg" alt width="72" height="72" />
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input
      type="email"
      v-model="email"
      class="form-control"
      autocomplete="true"
      placeholder="Email address"
      autofocus
    />
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" v-model="password" class="form-control" placeholder="Password" />
    <button
      :disabled="loading"
      :style="[loading?{cursor:'no-drop'}:{cursor:'pointer'}]"
      class="btn btn-lg btn-primary btn-block"
      type="submit"
    >{{!isSignup?"Sign in":"Sign up"}}</button>
    <button
      :disabled="loading"
      :style="[loading?{cursor:'no-drop'}:{cursor:'pointer'}]"
      class="btn btn-lg btn-secondary btn-block"
      @click="mode"
    >Switch to {{isSignup?"Sign in":"Sign up"}}</button>
    <p class="mt-5 mb-3 text-muted">&copy; {{new Date().getFullYear()}}</p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      isSignup: false,
      loading: false,
      email: "",
      password: ""
    };
  },
  methods: {
    mode() {
      this.isSignup = !this.isSignup;
    },
    auth(e) {
      e.preventDefault();
      this.loading = true;
      //   setLoading(true);
      //   console.log(formValue.email);
      let reqBody;
      if (this.isSignup) {
        reqBody = {
          query: `mutation{
        createUser(userInput: {email:"${this.email}",password:"${this.password}"}){
          _id
          email
          token
        }
      }`
        };
      }
      if (!this.isSignup) {
        reqBody = {
          query: `
          query{
            login(email:"${this.email}",password:"${this.password}"){
              email
              userId
              token
            }
          }`
        };
      }
      fetch("https://event-booking-node.herokuapp.com/graphql", {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          if (res.status !== 200 && res.status !== 201) {
            console.log(res);
            this.loading = false;
            throw new Error("Failed!");
          }
          return res.json();
        })
        .then(res => {
          this.loading = false;
          console.log(res);
          if (res.data) {
            if (res.data.login) {
              this.$store.commit("setAuthData", {
                userId: res.data.login.userId,
                email: res.data.login.email,
                token: res.data.login.token
              });
            }
            if (res.data.createUser) {
              this.$store.commit("setAuthData", {
                userId: res.data.createUser._id,
                email: res.data.createUser.email,
                token: res.data.createUser.token
              });
            }
            this.$router.push({ path: "events" });
          }
          if (res.errors) {
            this.loading = false;
            // setErrors({ ...errors, general: res.errors[0].message });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style  scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>