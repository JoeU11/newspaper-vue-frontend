<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      article: {}
    };
  },
  created: function () {
    this.getArticle()
  },
  methods: {
    getArticle() {
      console.log("getting article")
      axios.get(`http://localhost:3000/articles/${this.$route.params.id}.json`).then(response => {
        console.log(response.data)
        this.article = response.data
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h2>{{ article.title }}</h2>
    <h3>{{ article.author }}</h3>
    <div v-for="photo in article.photos">
      <img :src="photo.url">
    </div>
    <p> {{ article.text }}</p>
  </div>
</template>

<style></style>