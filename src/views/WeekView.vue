<script setup lang="ts">
import { ref } from 'vue';

const day= ref('HALLO');

</script>

<template>
  
<p>WEEKVIEW</p>

<v-list>
  <v-list-item>
          
    <v-list-item-content>
      <v-list-item-title>{{ day }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  </v-list>

</template>

<style scoped>

</style>
