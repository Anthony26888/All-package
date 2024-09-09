<template>
  <v-card class="mx-auto" variant="text">
    <v-form
      @submit.prevent="
        store.SignUp(
          FullName,
          Email,
          PhoneNumber,
          Password,
          RePassword
        ),
          store.OpenSuccess()
      "
    >
      <v-card-title><h2>SignUp</h2></v-card-title>
      <v-card-subtitle class="word-wrap"
        >Let’s get you all st up so you can access your personal
        account.</v-card-subtitle
      >
      <v-container>
        <v-text-field
          v-model="FullName"
          type="text"
          color="primary"
          label="Full Name"
          variant="outlined"
          :rules="FullName"
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
        <v-text-field
          class="mt-2"
          v-model="PhoneNumber"
          type="number"
          color="primary"
          label="Phone Number"
          variant="outlined"
          :rules="PhoneRules"
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
          :rules="PasswordRules"
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
          :rules="ConfirmPasswordRules"
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
          type="submit"
          variant="elevated"
          block
          >Create account
        </v-btn>
      </v-card-actions>

      <div class="d-flex justify-center p-2 signup">
        <p>Already have an account?</p>
        <router-link to="/">
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
.text-gray {
  color: 313131;
}
.word-wrap {
  word-wrap: break-word;
}
</style>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
export default {
  data: function () {
    return {
      FullName:"",
      PhoneNumber: "",
      Email: "",
      Password: null,
      RePassword: null,
      terms: null,

      rules: {
        required: (value) => !!value || "Please input Your Email",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Please input a valid email.";
        },
      },
      FullName: [(v) => !!v || "Please input First Name"],
      PhoneRules: [(v) => !!v || "Please input Phone Number"],
      PasswordRules: [
        (v) => !!v || "Please input password",
        (v) => (v && v.length >= 6) || "Minimun 6 characters",
      ],
      ConfirmPasswordRules: [
        (v) => !!v || "Please input confirm password",
        (v) => v === this.Password || "Confirm Password do not match",
      ],
      showhide: false,
    };
  },
  computed: {
    isFormValid() {
      if (this.terms == true) {
        return (
          this.Email &&
          this.Password &&
          this.FirstName &&
          this.LastName &&
          this.PhoneNumber &&
          this.RePassword
        );
      } else {
      }
    },
  },
  methods: {
    showeye() {
      this.showhide = !this.showhide;
    },
  },
};
</script>
