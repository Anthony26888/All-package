<template lang="">
  <v-dialog v-model="store.EditClientDialog" max-width="600">
    <form
      v-on:submit.prevent="
        store.EditClients(
          store.DetailClient.Company,
          store.DetailClient.Address,
          store.DetailClient.Manager,
          store.DetailClient.Contact,
          store.DetailClient.Email,
          store.DetailClient.Tax,
        );
        store.FetchDetailClient()
      "
    >
      <v-card>
        <v-toolbar dense fixed>
          <v-toolbar-title>Edit Infomation</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn
              icon="mdi-close"
              @click="store.EditClientDialog = false"
            ></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="store.DetailClient.Company"
            variant="outlined"
            label="Company"
          ></v-text-field>

          <v-text-field
            v-model="store.DetailClient.Address"
            variant="outlined"
            label="Address"
          ></v-text-field>
          <v-row>
            <v-col>
              <v-text-field
                v-model="store.DetailClient.Manager"
                variant="outlined"
                label="Manager"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="store.DetailClient.Contact"
                type="number"
                variant="outlined"
                label="Phone Number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            v-model="store.DetailClient.Email"
            type="email"
            variant="outlined"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="store.DetailClient.Tax"
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



    };
  },
  methods:{

  }
};
</script>
<style lang=""></style>
