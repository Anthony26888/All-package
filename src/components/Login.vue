<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" variant="text">
          <v-card-title><h1>Login</h1></v-card-title>
          <v-card-subtitle
            >Login to access your travelwise account</v-card-subtitle
          >
          <v-container>
            <v-text-field
              v-model="email"
              color="primary"
              label="Email"
              variant="outlined"
            ></v-text-field>

            <v-text-field
              v-model="password"
              type="password"
              color="primary"
              label="Password"
              placeholder="Enter your password"
              variant="outlined"
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
                <p class="float-end ma-2 mt-4 red-text">Forgot password</p>
              </v-col>
            </v-row>
          </v-container>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              :disabled="!form"
              :loading="loading"
              color="blue"
              size="large"
              type="submit"
              variant="elevated"
              block
              >Login
            </v-btn>
          </v-card-actions>

          <div class="d-flex justify-center p-2 signup">
            <p>{{ msg2 }}</p>
            <p class="red-text">{{ msg3 }}</p>
          </div>

          <v-row class="space">
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

          <v-row class="space ">
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
        </v-card>
      </v-col>
      <v-col>
        <v-img src="/src/assets/Login-Reg/Login.png"></v-img>
      </v-col>
    </v-row>
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

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    msg2: "Don't have an account?",
    msg3: " Sign up",
    rules: {
      required: (value) => !!value || "Field is required",
    },
  }),
};
</script>
