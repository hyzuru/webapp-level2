<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Today's Weather</h1>
    <h2>今日の天気予報</h2>

    <app/>
    <!-- <axios-app /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import app from "@/components/weatherapp.vue";
// import AxiosApp from "@/components/axiosapp.vue";

export default {
  name: "home",
  components: {
    app
  }
};
</script>
