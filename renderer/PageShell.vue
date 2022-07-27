<template>
  <div class="layout">
    <Header />

    <div class="content"><slot /></div>
  </div>
</template>

<script lang="ts" setup>
import Header from '../components/Header.vue'
</script>


<style scoped>
  @import "../styles/main.css";
  
</style>
