<template lang="">
  <v-dialog v-model="store.check" width="auto" persistent>
    <v-fade-transition hide-on-leave>
      <v-card class="mx-auto" elevation="16" width="400">
        <div class="py-12 text-center">
          <v-icon
            class="mb-6"
            :color="store.IconDialog ? 'success' : 'red'"
            :icon="
              store.IconDialog
                ? 'mdi-check-circle-outline'
                : 'mdi-close-circle-outline'
            "
            size="128"
          ></v-icon>

          <div class="text-h6 font-weight-bold">{{ store.StatusSuccess }}</div>
        </div>
        <v-card-actions>
          <v-btn
            color="gray"
            variant="tonal"
            :to="store.DirectSuccess"
            block
            @click="store.check = false"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-fade-transition>
  </v-dialog>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
const store = useAppStore();
</script>
<script>
export default {
  data() {
    return {
      dialog: true,
      checkIcon: false,
    };
  },
};
</script>
<style scoped>
.icon-success {
  width: 20px;
}
</style>
