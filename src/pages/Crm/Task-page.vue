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
      <AddTask />
      <DetailTask/>

    </v-main>
  </v-layout>
</template>

<script setup>
import DetailTask from "@/components/Crm/Clients/Detail-Task.vue"
import Total from "@/components/Crm/Clients/Card-Total-Task.vue"
import AddTask from "@/components/Crm/Clients/Add-Task.vue";
import Body from "@/components/Crm/Clients/Task.vue";
import Nav from "@/components/Navbar-top.vue";
import Footer from "@/components/AppFooter.vue";
</script>
<style scoped></style>
