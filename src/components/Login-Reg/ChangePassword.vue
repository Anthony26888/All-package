<template lang="">
  <v-card class="mx-auto" variant="text">
    <v-form @submit.prevent="store.ChangePassword(NewPassword)">
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
          color="primary"
          label="New Password"
          variant="outlined"
          :type="showhide ? 'type' : 'password'"
          :append-inner-icon="showhide ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showeye"
          :rules="PasswordRules"
        ></v-text-field>
        <v-text-field
          class="mt-4"
          v-model="ReNewPassword"
          color="primary"
          label="Re-enter Password"
          variant="outlined"
          :type="showhide ? 'type' : 'password'"
          :append-inner-icon="showhide ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showeye"
          :rules="ConfirmPasswordRules"
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
<script setup>
import { useAppStore } from "@/stores/app";
const store = useAppStore();
</script>
<script>
export default {
  data() {
    return {
      NewPassword:"",
      ReNewPassword:"",
      PasswordRules: [
        (v) => !!v || "Please input password",
        (v) => (v && v.length >= 6) || "Minimun 6 characters",
      ],
      ConfirmPasswordRules: [
        (v) => !!v || "Please input confirm password",
        (v) => v === this.NewPassword || "Confirm Password do not match",
      ],
      showhide: false,
    };
  },
  computed: {
    isFormValid() {
      return this.NewPassword && this.ReNewPassword;
    },
  },
  methods: {
    showeye() {
      this.showhide = !this.showhide;
    },
  },
};
</script>
<style lang=""></style>
