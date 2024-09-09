<template lang="">
  <v-container>
    <v-empty-state
      title="WELCOME TO CRM MANAGER"
      text="The page will help you manage your task"
      image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png"
      @click:action="onClickAction"
      action-text="Go Login"
    ></v-empty-state>
  </v-container>
</template>
<script setup>
import router from "@/router/index";
</script>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    onClickAction(){
      router.push("/Login")
    }
  },
};
</script>
<style lang=""></style>
