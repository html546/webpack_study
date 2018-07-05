<template>
  <div>
      {{msg}}
      <!-- <router-view></router-view> -->
      <button @click="show">notify</button>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      msg: "hello"
    };
  },

  components: {},

  computed: {},
  methods: {
    show() {
      this.$notify("我很丑", { delay: 1000 });
      Vue.say();
    }
  }
};
</script>
<style lang='lcss' scoped>
</style>