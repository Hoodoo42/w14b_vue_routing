<template>
  <div>
    <router-link to="/game">Game</router-link>
    <input ref="email_input" type="email" name="email" />
    <input ref="password_input" type="password" name="password" />
    <button @click="login_user">Login</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  methods: {
    login_user() {
      axios
        .request({
          url: `https://reqres.in/api/login`,

          method: `POST`,
          data: {
            email: this.$refs[`email_input`][`value`],
            password: this.$refs[`password_input`][`value`],
          },
        })

        .then((res) => {
          this.token = res[`data`][`token`];
          cookies.set(`loginToken`, this.token);
          this.$router.push(`/game`);
        })

        .catch((err) => {
          err;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>