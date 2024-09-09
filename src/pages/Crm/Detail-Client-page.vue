<template>
  <v-layout>
    <Nav />
    <v-main>
      <v-app>
        <v-breadcrumbs>
          <v-breadcrumbs-item to="/Client">Client</v-breadcrumbs-item>
          <v-breadcrumbs-divider
            ><v-icon icon="mdi-chevron-right"></v-icon
          ></v-breadcrumbs-divider>
          <v-breadcrumbs-item>Detail Client</v-breadcrumbs-item>
        </v-breadcrumbs>
        <v-card variant="text">
          <v-card-title>Detail Client</v-card-title>
          <v-card-text>
            <Card />
            <Body />
          </v-card-text>
        </v-card>
        <Alert />
      </v-app>
      <Footer />
      <AddDevice />
      <EditClient />
      <EditDevice />
    </v-main>
  </v-layout>
</template>

<script setup>
import EditDevice from "@/components/Crm/Clients/Edit-Device.vue";
import EditClient from "@/components/Crm/Clients/Edit-Client.vue";
import AddDevice from "@/components/Crm/Clients/Add-Device.vue";
import Body from "@/components/Crm/Clients/Detail-Client.vue";
import Nav from "@/components/Navbar-top.vue";
import Footer from "@/components/AppFooter.vue";
</script>
<style scoped></style>
