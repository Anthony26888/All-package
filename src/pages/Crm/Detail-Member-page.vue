<template>
  <v-layout>
    <Nav />
    <v-main>
      <v-app>
        <v-breadcrumbs>
          <v-breadcrumbs-item to="/Member">Member</v-breadcrumbs-item>
          <v-breadcrumbs-divider
            ><v-icon icon="mdi-chevron-right"></v-icon
          ></v-breadcrumbs-divider>
          <v-breadcrumbs-item>Detail Member</v-breadcrumbs-item>
        </v-breadcrumbs>
        <v-card variant="text" title="Detail Member">
          <template v-slot:append>
            <v-btn prepend-icon="mdi-delete" color="red" variant="tonal">Delete</v-btn>
          </template>
          <v-card-text>
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
import Body from "@/components/Crm/Clients/Detail-Member.vue";
import Nav from "@/components/Navbar-top.vue";
import Footer from "@/components/AppFooter.vue";
</script>
<style scoped></style>
