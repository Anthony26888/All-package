<template>
  <v-layout>
    <Nav />
    <v-main>
      <v-app>
        <v-card variant="text">
          <v-card-title>Member Manager</v-card-title>
          <v-card-text>
            <Total />
            <Body />
          </v-card-text>
        </v-card>
        <Alert />
      </v-app>
      <Footer />
      <AddTask />
      <DetailTask/>
    </v-main>
  </v-layout>
</template>

<script setup>
import Total from "@/components/Crm/Clients/Card-Total-Member.vue"
import Body from "@/components/Crm/Clients/Member.vue";
import Nav from "@/components/Navbar-top.vue";
import Footer from "@/components/AppFooter.vue";
</script>
<style scoped></style>
