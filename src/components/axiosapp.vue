<template>
  <div>
    <p>Enter A City</p>
    <form @submit.prevent="getData">
      <input type="text" placeholder="Enter City" v-model="city">
    </form>

    <!-- <div v-if="submitted"> -->
    <h2>{{ city }} Weather Forecast</h2>
    <div class="city">{{ city }} Weather for {{ forecastText }}</div>
    <div class="temp">Temperature: {{ temps }}° C.</div>
    <div>{{ icon }}</div>
    <div>{{ weatherType }}</div>
    <div>{{ overcast }}</div>

    <!-- </div> -->
  </div>
</template>

<script>
import axios from "../../node_modules/axios";

export default {
  name: "AxiosApp",
  data() {
    return {
      city: "",
      submitted: false,
      list: {},
      forecastText: "Tomorrow"
    };
  },
  methods: {
    getData() {
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
          this.forecastText = this.dates;
          // this.dates = new Date(this.dates * 1000)
          //   .toLocaleTimeString("en-GB")
          //   .slice(0, 4);
          console.log(this.dates.slice(0, 10));

          this.weatherType = response.data.list[8].weather;
          // this.overcast = response.data.list.weather;
          // this.icon =
          //   "images/" + response.data.list[8].weather.icon.slice(0, 2) + ".svg";

          // this.dates = response.data.list.map(list => {
          //   return list.dt_txt;
          // });

          // this.temps = response.data.list[.map(list => {
          //   return list.main.temp;
          // });

          // this.temps = response.data.list.map(list => {
          //   return list.main.temp;
          // });
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