<script setup lang="ts">

import HeaderBar from "./HeaderBar.vue";
import SideBar from "./SideBar.vue";
import Main from "./Main.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p style="background-color: coral">HeaderBar</p>
<!--        <HeaderBar></HeaderBar>-->
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <p style="background-color: coral">SideBar</p>
<!--        <SideBar></SideBar>-->
      </v-col>
      <v-col cols="6">
        <p style="background-color: coral">Main</p>
<!--        <Main></Main>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>