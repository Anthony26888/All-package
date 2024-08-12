<template>
  <v-container>
    <v-row>
      <v-col>
        <Login/>
      </v-col>
      <v-col>
        <v-img src="/src/assets/Login-Reg/Login.png" class="picture"></v-img>
      </v-col>
    </v-row>
    <Dialog/>

  </v-container>
</template>

<script setup>
import Login from "../components/Login-Reg/Login.vue";
import Dialog from "../components/Login-Reg/DialogSuccess.vue"
</script>
<style scoped>
.picture{
  height: 816;
}
</style>
