// Utilities
import { defineStore } from 'pinia'
import axios from "axios";
import DataUser from "@/database/db.json"
export const useAppStore = defineStore('app', {
  state: () => ({
    Url:"http://localhost:3000",
    check:null,
    checkEmail:null
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
          this.check = true
        }else{
          this.check = false
        }
      } catch (error) {
        this.check = false
      }
    },

    ClosedSuccess (){
      this.check=null
    }

  }
})
