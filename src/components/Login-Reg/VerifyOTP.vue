<template lang="">
  <v-card class="mx-auto" variant="text">
    <v-form @submit.prevent="">
      <v-card-text>
        <router-link to="/">
          <v-icon icon="mdi-arrow-left-bottom"></v-icon>
          Back to login
        </router-link>
      </v-card-text>
      <v-card-title><h2>Verify code</h2></v-card-title>
      <v-card-subtitle class="word-wrap"
        >An authentication code has been sent to your email.</v-card-subtitle
      >
      <v-container>
        <div class="text-center">
          <v-otp-input
            v-model="otp"
            :loading="loading"
            length="6"
            variant="solo-filled"
          ></v-otp-input>
        </div>
        <v-card-actions>
          <v-btn
            :disabled="otp.length < 6 || loading"
            color="primary"
            @click="onClick"
            block
            >Submit</v-btn
          >
        </v-card-actions>

        <div class="d-flex text-start mt-2 p-2">
          <p>Didn’t receive a code?</p>
          <p class="text-red ps-2" @click="store.sendEmail(Email)">Resend</p>
        </div>
      </v-container>
    </v-form>
  </v-card>
</template>
<style scoped>
.word-wrap {
  word-wrap: break-word;
  display: block;
}
.text-red {
  color: red;
  cursor: pointer;
}
</style>
<script setup>
import { useAppStore } from "@/stores/app";
import router from "@/router/index";
</script>
<script>
const store = useAppStore();
export default {
  data() {
    return {
      loading: false,
      otp: "",
      VerifyCode: localStorage.getItem("Code"),
      Email: localStorage.getItem("Email"),
    };
  },
  computed: {},
  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        if (this.VerifyCode == this.otp) {
          router.push("/ChangePassword");
        } else {
          store.check = true;
          store.StatusSuccess = "Verify code not match";
          store.IconSuccess = false;
        }
      }, 1000);
    },
  },
};
</script>
<style lang=""></style>
