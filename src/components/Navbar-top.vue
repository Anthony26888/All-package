<template lang="">
  <v-app-bar :elevation="0">
    <template v-slot:prepend>
        <v-btn icon="mdi-heart"></v-btn>
    </template>

    <v-app-bar-title>{{Title}}</v-app-bar-title>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      Title: "ALL PACKAGE",
    };
  },
};
</script>
<style lang=""></style>
