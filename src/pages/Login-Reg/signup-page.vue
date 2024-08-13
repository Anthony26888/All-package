<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img src="/src/assets/Login-Reg/SignUp.png" class="picture"></v-img>
      </v-col>
      <v-col>
        <SignUp/>
      </v-col>
    </v-row>
    <Dialog/>
  </v-container>

</template>

<script setup>
import SignUp from "../../components/Login-Reg/SignUp.vue";
import Dialog from "../../components/Login-Reg/DialogSuccess.vue"
</script>
<style scoped>
.picture{

  height: 816;
}
</style>
