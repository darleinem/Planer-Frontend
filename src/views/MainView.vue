<script setup lang="ts">
import Header from '../components/Header.vue';
import TaskList from '../components/TaskList.vue';
import WeekView from './WeekView.vue';

</script>

<template>
  <div class="main-wrapper">
    <div class="left-container">
      <Header></Header>
      <WeekView></WeekView>
    </div>

    <div class="right-container">
        <TaskList></TaskList>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  height: 100vh;
  width: 100%;
}

.left-container {
  flex: 5;
  background-color: #dd5d5d;
  padding: 20px;
  overflow-y: auto;
}

.right-container {
  flex: 1;
  background-color: #3f8996;
  padding: 20px;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .main-wrapper {
    flex-direction: column;
    height: auto;
  }

  .left-container,
  .right-container {
    width: 100%;
  }
}
</style>
