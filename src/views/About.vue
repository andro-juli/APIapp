<template>
  <div class="about">
    <div class="container p-5" v-if="cases && cases.length != 0">
      <h1 class="heading">COVID-19 DATA: Know your countries status</h1>
      <div class="row">
        <div
          class="column card main-div"
          style="width: 18rem;"
          v-for="caseValue in cases"
          :key="caseValue.id"
        >
          <div class="card-body">
            <h5 class="card-title active">{{ caseValue.All.country }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              <b>Capital city:</b> {{ caseValue.All.capital_city }}
            </h6>
            <h6 class="card-subtitle mb-2 text-muted">
              <b>Population:</b> {{ caseValue.All.population }}
            </h6>
            <h6 class="card-subtitle mb-2 text-muted">
              <b>Confirmed cases:</b> {{ caseValue.All.confirmed }}
            </h6>
            <h6 class="card-subtitle mb-2">
              <b>Number of Death:</b> {{ caseValue.All.deaths }}
            </h6>
            <h6 class="card-subtitle mb-2 text-muted">
              <b>Recovered:</b> {{ caseValue.All.recovered }}
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      loading..
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "about",
  data() {
    return {
      cases: null,
      loading: false,
    };
  },
  components: {},

  mounted() {
    this.getDataFromCovidApi();
  },
  methods: {
    getDataFromCovidApi() {
      axios
        .get("https://covid-api.mmediagroup.fr/v1/cases")
        .then((res) => (this.cases = res.data))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.heading {
  background: #7481f1;
  width: 100%;
  text-align: center;
}
.card-body :nth-child(5) {
  background: red;
  color: white;
  border-radius: 5px;
}
.card-body:hover {
  background: beige;
}
.card-subtitle:hover {
  background: yellowgreen;
}
.row {
  display: flex;
  justify-content: center;
}
</style>
