<template>
  <div class="hello">
    <p>Check Today's Weather</p>
    <form @submit.prevent="getWeather">
      <input type="text" placeholder="Enter City to check weather" v-model="city">
    </form>

    <div v-if="submitted">
      <h2>{{ weather.name }} Weather Today</h2>
      <h2>{{ city }} Weather Forecast</h2>
      <div class="description">{{ weather.description }}</div>
      <div class="temp">It's currently {{ weather.temp }}° C.</div>
      <div class="highlow">High: {{ weather.high }}° C. Low: {{ weather.low }}° C.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      city: "",
      submitted: false,
      weather: {}
    };
  },
  methods: {
    getWeather() {
      this.weather = {};
      this.submitted = false;
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${
          this.city
        }&units=metric&appid=d591c2b2918ba36cbfc82e4c68750d8e`
      )
        .then(response => response.json())
        .then(response => {
          let data = response.list[0];
          this.submitted = true;
          this.weather.name = data.name;
          this.weather.description = data.weather[0].main;
          this.weather.temp = data.main.temp;
          this.weather.high = data.main.temp_max;
          this.weather.low = data.main.temp_min;
        })
        .catch(error => console.log(error));
      this.city = "";
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
