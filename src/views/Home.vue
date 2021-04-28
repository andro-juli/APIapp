<template>
  <div class="home">
    <div v-if="articles && articles.length != 0" class="container">
      <div v-for="(article, index) in articles" :key="index" class="cards">
        <a :href="article.url" target="_blank">
          <h2 class="title">{{ article.title }}</h2>
          <div class="card-image">
            <img
              :src="article.urlToImage"
              alt=""
              v-if="article.urlToImage !== null"
            />
            <img src="../assets/logo.png" alt="" v-else />
          </div>
          <p class="content">{{ article.content }}</p>
          <small class="author">{{ article.author }}</small>
          <h5 class="date">{{ article.publishedAt | formattedDate }}</h5>
        </a>
      </div>
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import moment from "moment";

export default {
  name: "Home",
  data() {
    return {
      news: null,
      articles: null,
      loading: false,
      error: false,
    };
  },
  components: {},

  mounted() {
    this.getDataFromNewsApi();
  },
  filters: {
    formattedDate(value) {
      return moment(value).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
  methods: {
    getDataFromNewsApi() {
      this.loading = true;
      axios
        .get(
          "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9266f68a762347a5a81f4df9c6b808ca"
        )
        .then(
          (response) => (
            (this.news = response), (this.articles = response.data.articles)
          )
        )
        .catch((error) => console.log(error), (this.error = true));
    },
  },
};
</script>

<style scoped>
.home {
  background: #ecfdf7;
}
.container {
  max-width: 700px;
  display: block;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.cards {
  padding: 20px;
  margin-top: 20px;
  border-radius: 30px;
  background: #f2f4f5;
}
.card-image img {
  width: 100%;
}
.title {
  color: green;
}
.author {
  color: #da3c15;
}
.content {
  line-height: 20px;
  text-decoration: none;
}
.date {
  color: black;
}
</style>
