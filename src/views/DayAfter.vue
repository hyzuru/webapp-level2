<template>
  <div class="dayafter">
    <h1>Weather Day After Tomorrow</h1>
    <h2>明後日の天気予報</h2>
    <app/>
  </div>
</template>

<script>
import app from "@/components/dayafterweather.vue";

export default {
  name: "home",
  components: {
    app
  }
};
</script>
