<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      articles: []
    };
  },
  created: function () {
    this.getArticles()
  },
  methods: {
    getArticles() {
      console.log("getting articles")
      axios.get("http://localhost:3000/articles.json").then(response => {
        console.log(response.data)
        this.articles = response.data
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <div v-for="article in articles">
      <a :href="`/articles/${article.id}`">
        <h2>{{ article.title }}</h2>
      </a>
      <h3>{{ article.author }}</h3>
      <div v-for="photo in article.photos">
        <img :src="photo.url">
      </div>
      <p> {{ article.text }}</p>
    </div>
  </div>
</template>

<style></style>