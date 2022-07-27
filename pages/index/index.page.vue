<template>
  <h1 class="header"><LocaleText text="Welcome" /></h1>
  <ul class="text-center mt-6">
    <li>Interactive. <Counter class="bg-yellow-500 py-2 px-4 hover:bg-blue-200 rounded-full" /></li>
  </ul>
</template>

<script lang="ts" setup>
import Counter from './Counter.vue'
import LocaleText  from '../../components/LocaleText.vue'
</script>
