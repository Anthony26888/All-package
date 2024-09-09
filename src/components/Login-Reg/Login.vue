<template>
  <v-container>
    <v-card class="mx-auto" variant="text">
      <v-form @submit.prevent="store.Login(Email, Password)">
        <v-card-title><h2>Login</h2></v-card-title>
        <v-card-subtitle
          >Login to access your travelwise account</v-card-subtitle
        >
        <v-container>
          <v-text-field
            v-model="Email"
            type="email"
            color="primary"
            label="Email"
            variant="outlined"
            :rules="[rules.required, rules.email]"
          ></v-text-field>

          <v-text-field
            class="mt-2"
            v-model="Password"
            :type="showhide ? 'type' : 'password'"
            color="primary"
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            filled
            :append-inner-icon="showhide ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showeye"
          ></v-text-field>

          <v-row>
            <v-col>
              <v-checkbox
                v-model="terms"
                color="secondary"
                label="Remember me"
                class="float-start"
              ></v-checkbox>
            </v-col>
            <v-col>
              <router-link to="/ForgotPassword">
                <p class="float-end ma-2 mt-4 red-text">Forgot password</p>
              </router-link>
            </v-col>
          </v-row>
        </v-container>

        <v-card-actions>
          <v-btn
            :loading="loading"
            :disabled="!isFormValid"
            color="blue"
            type="submit"
            variant="elevated"
            block
            >Login
          </v-btn>
        </v-card-actions>

        <div class="d-flex justify-center p-2 signup">
          <p>{{ msg2 }}</p>
          <router-link to="/SignUp">
            <p class="red-text ps-2">{{ msg3 }}</p>
          </router-link>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>
<style scoped>
.red-text {
  color: #ff8682;
}
.signup {
  margin-top: 16px;
}
.space {
  margin-top: 40px;
}
</style>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
export default {
  data: () => ({
    Email: "",
    Password: "",
    terms: null,
    msg2: "Don't have an account?",
    msg3: " Sign up",

    rules: {
      required: (value) => !!value || "Please input email",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail not correct.";
      },
    },
    showhide: false,
  }),
  computed: {
    isFormValid() {
      return this.Email && this.Password;
    },
  },
  methods: {
    showeye() {
      this.showhide = !this.showhide;
    },
  },
};
</script>
