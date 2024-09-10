<template lang="">
  <v-dialog v-model="store.AddClientDialog" max-width="400">
    <form
      v-on:submit.prevent="store.AddClients(Company, Address, Manager, Phone, Email, Tax); store.AddClientDialog = false"
    >
      <v-card>
        <v-toolbar class="bg-primary">
          <v-toolbar-title>Add Client</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn
              icon="mdi-close"
              @click="store.AddClientDialog = false"
            ></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="Company"
            variant="outlined"
            label="Company"
          ></v-text-field>

          <v-text-field
            v-model="Address"
            variant="outlined"
            label="Address"
          ></v-text-field>
          <v-row>
            <v-col>
              <v-text-field
                v-model="Manager"
                variant="outlined"
                label="Manager"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="Phone"
                type="number"
                variant="outlined"
                label="Phone Number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            v-model="Email"
            type="email"
            variant="outlined"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="Tax"
            variant="outlined"
            label="Tax code"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="primary" variant="flat" type="submit">SAVE</v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-dialog>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
export default {
  data() {
    return {
      dialog: true,
      loading: false,
      Company: "",
      Address: "",
      Manager: "",
      Phone: "",
      Email:"",
      Tax:""
    };
  },
  watch: {
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
<style lang=""></style>
