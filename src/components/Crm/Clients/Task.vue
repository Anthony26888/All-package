<template lang="">
  <v-card class="mt-3" title="Tasks">
    <template v-slot:append>
      <v-btn color="primary" prepend-icon="mdi-plus">New Task</v-btn>
    </template>
    <v-card-text class="mt-2">
      <v-row>
        <v-col>
          <v-card variant="tonal" color="primary">
            <v-card-title>To do</v-card-title>
            <v-card-text>
              <v-virtual-scroll :items="store.Tasks" height="400" item-height="50">
                <template v-slot:default="{ item }">
                  <v-list-item>
                    <v-card
                      :title="item.Engineer"
                      subtitle="Subtitle"
                      text="..."
                    ></v-card>
                  </v-list-item>
                </template>
              </v-virtual-scroll>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card variant="tonal" color="success">
            <v-card-title>Done</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
store.FetchTasks();
export default {
  data() {
    return {
      items: Array.from({ length: 1000 }, (k, v) => v + 1),
    };
  },
};
</script>
<style scoped>
.hover-list:hover {
  background: #bbdefb;
}
.card-detail {
  color: "black";
  background: #e0e4ea;
  border-radius: 20px;
}
</style>
