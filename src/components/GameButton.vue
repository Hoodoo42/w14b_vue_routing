<template>
  <div>
    <button @click="roll_number">Click To Roll</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    roll_number() {
      axios
        .request({
          url: `http://www.randomnumberapi.com/api/v1.0/randomnumber`,
        })
        .then((res) => {
          this.rolled_number = res[`data`][0];
          if (this.rolled_number < 50) {
            document.body.insertAdjacentHTML(`afterbegin``<h3>lost</h3>`);
          } else {
            document.body.insertAdjacentHTML(`afterbegin``<h3>Win!</h3>`);
          }
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