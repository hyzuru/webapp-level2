<template>
  <div class="hello">
    <p>Check Today's Weather</p>
    <form @submit.prevent="getWeather">
      <input type="text" placeholder="Enter City to check weather" v-model="city">
    </form>

    <!-- <div v-if="submitted"> -->
    <h2>{{ city }} Weather Forecast</h2>
    <div class="city">{{ city }} Weather for {{ forecastText }}</div>
    <div class="temp">Temperature: {{ temps }}° C.</div>
    <!-- <div>{{ icon }}</div> -->
    <div>Weather type: {{ overcast }}</div>
    <!-- <div>{{ overcast }}</div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "../../node_modules/axios";

export default {
  name: "app",
  data() {
    return {
      city: "",
      submitted: false,
      // list: {},
      temps: "--",
      icon: "--",
      overcast: "--",
      forecastText: "Tomorrow",
      weatherType: "--"
    };
  },

  methods: {
    getWeather() {
      this.list = {};
      this.submitted = false;

      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${
            this.city
          }&units=metric&cnt=17&appid=5cd7317eaa803d5fd1f744a95d3b729a`
        )

        .then(response => {
          // console.log(response.data.city.name);
          console.log(response.data.list[0]);
          console.log(response.data.list[8]);
          console.log(response.data.list[16]);
          this.city = response.data.city.name;

          this.temps = response.data.list[8].main.temp;
          this.dates = response.data.list[8].dt_txt.slice(0, 10);
          console.log(this.dates.slice(0, 10));
          this.forecastText = this.dates;
          this.overcast = response.data.list[8].weather[0].main;
          // this.dates = new Date(this.dates * 1000)
          //   .toLocaleTimeString("en-GB")
          //   .slice(0, 4);
          // console.log(this.dates.slice(0, 10));
        })
        .catch(error => {
          console.log(error);
        });
    },
    beforeMount() {
      this.getData();
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
