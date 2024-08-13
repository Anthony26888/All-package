<template lang="">
  <v-card class="mx-auto" variant="text">
    <v-form
      @submit.prevent="
        store.ForgotPassword(
          Email,
        ),
          store.OpenSuccess()
      "
    >
      <v-card-text>
        <router-link to="/">
          <v-icon icon="mdi-arrow-left-bottom"></v-icon>
          Back to login
        </router-link>
      </v-card-text>
      <v-card-title><h2>Forgot your password?</h2></v-card-title>
      <v-card-subtitle class="word-wrap"
        >Enter your email below to recover
        your password.</v-card-subtitle
      >
      <v-container>
        <v-text-field
          class="mt-4"
          v-model="Email"
          type="email"
          color="primary"
          label="Email"
          variant="outlined"
          placeholder="john.doe@gmail.com"
          :rules="[rules.required, rules.email]"
        ></v-text-field>
        <v-card-actions>
          <v-btn
            :loading="loading"
            :disabled="!isFormValid"
            color="blue"
            type="submit"
            variant="elevated"
            block
            >Submit
          </v-btn>
        </v-card-actions>

        <v-row class="space mt-2">
          <v-col>
            <v-divider class="mt-2"></v-divider>
          </v-col>
          <v-col>
            <p class="text-center text-subtitle">Or login with</p>
          </v-col>
          <v-col>
            <v-divider class="mt-2"></v-divider>
          </v-col>
        </v-row>

        <v-row class="space">
          <v-col>
            <v-card-actions>
              <v-btn
                :loading="loading"
                color="blue"
                size="large"
                type="submit"
                variant="outlined"
                block
                ><v-icon icon="mdi-facebook" />
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-col>
            <v-card-actions>
              <v-btn
                :loading="loading"
                color="blue"
                size="large"
                type="submit"
                variant="outlined"
                block
                ><v-icon icon="mdi-google" />
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-col>
            <v-card-actions>
              <v-btn
                :loading="loading"
                color="blue"
                size="large"
                type="submit"
                variant="outlined"
                block
                ><v-icon color="black" icon="mdi-apple" />
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
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
