<template lang="">
  <v-app-bar :elevation="1" color="#F8F8FB">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <h3>CRM Software</h3>
    </v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary permanent color="#F8F8FB">
    <v-list density="compact" nav class="mt-5">
      <v-list-item
        v-for="(item, i) in nav"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div v-show="Info">
        <v-list density="compact" nav>
          <v-list-item
            v-for="(items, i) in footer"
            :key="i"
            :value="items"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="items.icon"></v-icon>
            </template>

            <v-list-item-title>{{ items.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>

      <v-list-item
        lines="two"
        subtitle="Logged in"
        title="store.Logins[0].FullName"
      >
        <template v-slot:prepend>
          <v-avatar color="orange">
            <v-icon color="white">mdi-account-tie</v-icon>
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-btn
            icon="mdi-menu-up"
            variant="text"
            @click="Info = !Info"
          ></v-btn>
        </template>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
export default {
  data() {
    return {
      Info: false,
      drawer: false,
      nav: [
        { text: "Dashboard", icon: "mdi-view-dashboard" },
        { text: "Client", icon: "mdi-home-group" },
        { text: "Task", icon: "mdi-checkbox-marked-circle-auto-outline" },
        { text: "Member", icon: "mdi-account-group" },
      ],
      footer: [
        { text: "Setting", icon: "mdi-cogs" },
        { text: "Infomation", icon: "mdi-information" },
        { text: "Logout", icon: "mdi-logout" },
      ],
    };
  },
  methods: {
    onClickInfo() {
      this.Info = true;
    },
  },
};
</script>
<style lang=""></style>
