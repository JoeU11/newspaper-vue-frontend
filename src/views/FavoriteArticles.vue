<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      articles: []
    };
  },
  created: function () {
    this.getFavorites()
  },
  methods: {
    getFavorites() {
      console.log("getting articles")
      axios.get("http://localhost:3000/favorites.json").then(response => {
        console.log(response.data)
        this.articles = response.data
      })
    },
    removeFavorite(article) {
      axios.delete(`http://localhost:3000/favorites/${article.id}.json`).then(response => {
        console.log(response.data)
        // remove unfavorited article without refresh
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
      <button v-on:click="removeFavorite(article)">Remove Favorite</button>
    </div>
  </div>
</template>

<style></style>