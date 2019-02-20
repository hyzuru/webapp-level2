<template>
  <div class="dayafter">
    <h1>Weather Tomorrow</h1>
    <h2>明日の天気予報</h2>
    <App/>
  </div>
</template>

<script>
import App from "@/components/tomorrowweather.vue";

export default {
  name: "home",
  components: {
    App
  }
};
</script>
