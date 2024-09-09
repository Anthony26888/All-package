<template>
  <v-layout>
    <Nav />
    <v-main>
      <v-app>
        <v-card variant="text" title="Clients">
          <v-card-text>
            <Card />
            <Body />
          </v-card-text>
        </v-card>
        <Alert />
      </v-app>
      <Footer />
      <AddClient />
    </v-main>
  </v-layout>
</template>

<script setup>
import Alert from "@/components/Crm/Clients/Alert.vue";
import Nav from "@/components/Navbar-top.vue";
import Footer from "@/components/AppFooter.vue";
import Body from "@/components/Crm/Clients/Client.vue";
import Card from "@/components/Crm/Clients/Card-Total.vue";
import Opps from "@/components/404.vue";
import AddClient from "@/components/Crm/Clients/Add-Client.vue";
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
<style scoped></style>
