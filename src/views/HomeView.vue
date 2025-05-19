<template>
  <div class="home">
    <div class="flex space-x-4">
      <div class="bg-red-500 w-24">1</div>
      <div class="bg-blue-500 w-48">2</div>
      <div class="bg-green-500 flex-1">3</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>
