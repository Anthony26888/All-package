<template lang="">
  <div class="text-center pa-4">
    <v-dialog v-model="store.DeleteDeviceDialog" max-width="400">
      <form v-on:submit.prevent="store.DeleteDevice(store.DeviceClient[0].id)">
        <v-card>
          <v-toolbar class="bg-primary">
            <v-toolbar-title>Delete Device</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>
              <v-btn
                icon="mdi-close"
                @click="store.DeleteDeviceDialog = false"
              ></v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text> Are you sure you want delete this device? </v-card-text>
          <v-card-actions>
            <v-btn variant="tonal" @click="store.DeleteDeviceDialog = false">
              Cancel
            </v-btn>
            <v-btn class="bg-red" type="submit"> Delete </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </div>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
export default {
  data() {
    return {};
  },
};
</script>
<style lang=""></style>
