<template>
  <v-layout>
    <Nav />
    <v-main>
      <v-app>
        <v-card variant="text">
          <v-card-title>Task Manager</v-card-title>
          <v-card-text>
            <Total />
            <Body />
          </v-card-text>
        </v-card>
        <Alert />
      </v-app>
      <Footer />
      <AddDevice />
      <EditClient />
      <EditDevice />
      <DeleteDevice />
    </v-main>
  </v-layout>
</template>

<script setup>
import Total from "@/components/Crm/Clients/Card-Total-Task.vue"
import DeleteDevice from "@/components/Crm/Clients/Delete-Device.vue";
import EditDevice from "@/components/Crm/Clients/Edit-Device.vue";
import EditClient from "@/components/Crm/Clients/Edit-Client.vue";
import AddDevice from "@/components/Crm/Clients/Add-Device.vue";
import Body from "@/components/Crm/Clients/Task.vue";
import Nav from "@/components/Navbar-top.vue";
import Footer from "@/components/AppFooter.vue";
</script>
<style scoped></style>
