<template lang="">
  <v-empty-state
    headline="Whoops, 404"
    title="Page not found"
    text="The page you were looking for does not exist"
    image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png"
    @click:action="onClickAction"
    action-text="Go Login"
  ></v-empty-state>
</template>
<script setup>
import router from "../router/index";
</script>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickAction() {
      router.push("/Login")
    },
  },
};
</script>
<style lang=""></style>
