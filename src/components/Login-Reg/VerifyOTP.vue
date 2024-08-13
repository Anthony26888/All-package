<template lang="">
  <v-card class="mx-auto" variant="text">
    <v-form @submit.prevent="store.ForgotPassword(Email), store.OpenSuccess()">
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
            variant="underlined"
          ></v-otp-input>
        </div>
        <v-card-actions>
          <v-btn
            :disabled="otp.length < 6 || loading"
            class="my-5"
            color="primary"
            text="Submit"
            @click="onClick"
            block
          ></v-btn>
        </v-card-actions>
        <div class="d-flex text-start mt-2 p-2">
          <p>Didn’t receive a code?</p>
          <router-link to="/SignUp">
            <p class="text-red ps-2">Resend</p>
          </router-link>
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
}
</style>
<script>
export default {
  data() {
    return {
      loading: false,
      otp: "",
    };
  },
  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
<style lang=""></style>
