<template lang="">
  <v-card class="mx-auto" variant="text">
    <v-form @submit.prevent="store.ForgotPassword(Email), store.OpenSuccess()">
      <v-card-text>
        <router-link to="/">
          <v-icon icon="mdi-arrow-left-bottom"></v-icon>
          Back to login
        </router-link>
      </v-card-text>
      <v-card-title><h2>Set a password</h2></v-card-title>
      <v-card-subtitle class="word-wrap"
        > Please set a new password for your account.</v-card-subtitle
      >
      <v-container>
        <v-text-field
          class="mt-4"
          v-model="NewPassword"
          type="password"
          color="primary"
          label="Create Password"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          class="mt-4"
          v-model="ReNewPassword"
          type="password"
          color="primary"
          label="Re-enter Password"
          variant="outlined"
        ></v-text-field>
        <v-card-actions>
          <v-btn
            :loading="loading"
            :disabled="!isFormValid"
            color="blue"
            type="submit"
            variant="elevated"
            block
            >Set password
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-card>
</template>
<style scoped>
.word-wrap {
  word-wrap: break-word;
  display: block;
}
</style>
<script>
export default {
  data() {
    return {
      Email: "",
      rules: {
        required: (value) => !!value || "Email required",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail not correct.";
        },
      },
    };
  },
  computed: {
    isFormValid() {
      return this.Email;
    },
  },
};
</script>
<style lang=""></style>
