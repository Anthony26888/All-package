// Utilities
import { defineStore } from 'pinia'
import axios from "axios";
import DataUser from "@/database/db.json"
export const useAppStore = defineStore('app', {
  state: () => ({
    Url:"http://localhost:3000",
    check:null,
    checkEmail:null,
    StatusSuccess:"",
    DirectSuccess:""
  }),
  getters:{

  },
  actions:{
    async Login(Email, Password) {
      try {
        const res = await fetch(`${this.Url}/user?email=${Email}`);
        const CheckLogin = await res.json();
        const login = CheckLogin[0]

        if (Password == login.password){
          this.StatusSuccess = "Login Success"
          this.check = true
          this.DirectSuccess = "/Home"
        }else{
          this.check = false
        }
      } catch (error) {
        this.check = false
      }
    },

    SignUp(FirstName, LastName, Email, PhoneNumber, Password){
      axios.post(`${this.Url}/user`, {
        FirstName,
        LastName,
        Email,
        PhoneNumber,
        Password
      })
      .then(function (response) {
        console.log(response);
        this.check = true
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    OpenSuccess (){
      this.check = true,
      this.StatusSuccess = "Create account success"
      this.DirectSuccess = "/"
    },

    ClosedSuccess (){
      this.check=null
    }

  }
})
