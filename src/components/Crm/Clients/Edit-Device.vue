<template lang="">
  <v-dialog v-model="store.EditDeviceDialog" max-width="600">
    <form
      v-on:submit.prevent="
        store.EditDevices(
          store.DeviceClient[0].Device,
          store.DeviceClient[0].SeriDevice,
          store.DeviceClient[0].Printhead,
          store.DeviceClient[0].SeriPrinthead,
          store.DeviceClient[0].Fuel,
          store.DeviceClient[0].Code,
          store.DeviceClient[0].Accessory,
          store.DeviceClient[0].Date,
          store.DeviceClient[0].id,
          store.DeviceClient[0].IDCompany
        )
      "
    >
      <v-card>
        <v-toolbar>
          <v-toolbar-title>Edit Device</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn
              icon="mdi-close"
              @click="store.EditDeviceDialog = false"
            ></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col>
              <v-select
                v-model="store.DeviceClient[0].Device"
                label="Select device"
                :items="Device"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-model="store.DeviceClient[0].SeriDevice"
                variant="outlined"
                label="Seri Device"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                v-model="store.DeviceClient[0].Printhead"
                label="Select Printhead"
                :items="Printhead"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-model="store.DeviceClient[0].SeriPrinthead"
                variant="outlined"
                label="Seri Printhead"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-select
                v-model="store.DeviceClient[0].Fuel"
                label="Select Fuel"
                :items="Fuel"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="store.DeviceClient[0].Code"
                label="Select code line"
                :items="Code"
                variant="outlined"
              ></v-select>
            </v-col>
          </v-row>
          <v-text-field
            v-model="store.DeviceClient[0].Accessory"
            variant="outlined"
            label="Accessory"
          ></v-text-field>
          <v-text-field
            variant="outlined"
            label="Date"
            type="date"
            v-model="store.DeviceClient[0].Date"
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
store.FetchDeviceClient();
export default {
  data() {
    return {
      Device: ["Máy 4900", "Máy 5900", "Máy 7900", "Máy 8900"],
      Printhead: ["Ultima", "Ultima Plus", "Mini"],
      Fuel: ["1014/1505", "1010/1555", "1039/1505", "1079/1505"],
      Code: ["2 lines", "3 lines", "4 lines", "5 lines"],
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
