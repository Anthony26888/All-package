<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <ForgotPassword />
      </v-col>
      <v-col cols="6">
        <v-img src="/src/assets/Login-Reg/ForgotPassword.png" class="picture"></v-img>
      </v-col>
    </v-row>
    <Dialog />
  </v-container>
</template>

<script setup>
import ForgotPassword from "../../components/Login-Reg/ForgotPassword.vue";
import Dialog from "../../components/Login-Reg/DialogSuccess.vue";
</script>
<style scoped>
.picture {
  height: 816;
}
</style>
