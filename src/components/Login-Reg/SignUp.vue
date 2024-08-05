<template>
  <v-card class="mx-auto" variant="text">
    <v-form @submit.prevent="store.SignUp(Email, Password)">
      <v-card-title><h1>SignUp</h1></v-card-title>
      <v-card-subtitle
        >Let’s get you all st up so you can access your personal
        account.</v-card-subtitle
      >
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="FirstName"
              type="text"
              color="primary"
              label="First Name"
              variant="outlined"
              placeholder=""
              :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-text-field
              class="mt-2"
              v-model="Email"
              type="email"
              color="primary"
              label="Email"
              variant="outlined"
              placeholder="john.doe@gmail.com"
              :rules="[rules.required, rules.email]"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="LastName"
              type="text"
              color="primary"
              label="First Name"
              variant="outlined"
              :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-text-field
              class="mt-2"
              v-model="PhoneNumber"
              type="number"
              color="primary"
              label="Phone Number"
              variant="outlined"
              :rules="[rules.required, rules.email]"
            ></v-text-field>
          </v-col>
        </v-row>

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
        <v-text-field
          class="mt-2"
          v-model="RePassword"
          :type="showhide ? 'type' : 'password'"
          color="primary"
          label="Confirm Password"
          placeholder="Enter your password"
          variant="outlined"
          filled
          :append-inner-icon="showhide ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showeye"
        ></v-text-field>

        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to all the Terms and Privacy Policies"
        ></v-checkbox>
      </v-container>

      <v-card-actions>
        <v-btn
          :loading="loading"
          :disabled="!isFormValid"
          color="blue"
          size="large"
          type="submit"
          variant="elevated"
          block
          >Create account
        </v-btn>
      </v-card-actions>

      <div class="d-flex justify-center p-2 signup">
        <p>Already have an account?</p>
        <router-link to="/SignUp">
          <p class="red-text ps-2">Login</p>
        </router-link>
      </div>

      <v-row class="space">
        <v-col>
          <v-divider class="mt-2"></v-divider>
        </v-col>
        <v-col>
          <p class="text-center text-gray">Or login with</p>
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
    </v-form>
  </v-card>
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
.text-gray{
  color:313131
}
</style>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
export default {
  data: () => ({
    FirstName:"",
    LastName:"",
    PhoneNumber:"",
    Email: "",
    Password: "",
    RePassword:"",
    terms: null,
    msg2: "Don't have an account?",
    msg3: " Sign up",

    rules: {
      required: (value) => !!value || "Không được bỏ trống",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail không đúng.";
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
