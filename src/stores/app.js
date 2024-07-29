// Utilities
import { defineStore } from 'pinia'
import axios from "axios";
import DataUser from "@/database/db.json"
export const useAppStore = defineStore('app', {
  state: () => ({
    Url:"http://localhost:3000",
    DataUser,
    CheckLogin:""
  }),
  getters:{

  },
  actions:{
    async Login(Email, Password) {
      const res = await fetch(`${this.Url}/User`);
      const CheckLogin = await res.json();
    },

  }
})
