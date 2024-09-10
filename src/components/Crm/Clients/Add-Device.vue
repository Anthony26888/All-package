<template lang="">
  <v-dialog v-model="store.AddDeviceDialog" max-width="600">
    <form
      v-on:submit.prevent="
        store.AddDevices(
          SelectDevice,
          SeriDevice,
          SelectPrinthead,
          SeriPrinthead,
          SelectFuel,
          SelectDate,
          SelectCode,
          Part,
          store.IDClient
        )
      "
    >
      <v-card>
        <v-toolbar class="bg-primary">
          <v-toolbar-title>Add Device</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn
              icon="mdi-close"
              @click="store.AddDeviceDialog = false"
            ></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col>
              <v-select
                v-model="SelectDevice"
                label="Select device"
                :items="Device"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-model="SeriDevice"
                variant="outlined"
                label="Seri Device"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                v-model="SelectPrinthead"
                label="Select Printhead"
                :items="Printhead"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-model="SeriPrinthead"
                variant="outlined"
                label="Seri Printhead"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-select
                v-model="SelectFuel"
                label="Select Fuel"
                :items="Fuel"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="SelectCode"
                label="Select code line"
                :items="Code"
                variant="outlined"
              ></v-select>
            </v-col>
          </v-row>
          <v-text-field
            v-model="Part"
            variant="outlined"
            label="Accessory"
          ></v-text-field>
          <v-text-field
            variant="outlined"
            label="Date"
            type="date"
            v-model="SelectDate"
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
      SelectDevice: "",
      SeriDevice: "",
      SelectPrinthead: "",
      SeriPrinthead: "",
      SelectFuel: "",
      SelectDate: "",
      SelectCode:"",
      Part: "",
      Device: ["Máy 4900", "Máy 5900", "Máy 7900", "Máy 8900"],
      Printhead: ["Ultima", "Ultima Plus", "Mini"],
      Fuel: ["1014/1505", "1010/1555", "1039/1505", "1079/1505"],
      Code:["2 lines", "3 lines", "4 lines", "5 lines"],
    };
  },
  watch: {
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  computed: {},
};
</script>
<style lang=""></style>
