<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      article: {}
    };
  },
  created: function () { },
  methods: {
    postArticle() {
      console.log("posting article")
      axios.post(`http://localhost:3000/articles.json`, this.article).then(response => {
        console.log(response.data)
        this.$router.push("/articles")
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <label>Title: </label><input type="text" v-model="article.title"><br />
    <label>text: </label><input type="text" v-model="article.text"><br />
    <label>Author ID: </label><input type="integer" v-model="article.author_id"><br />
    <button v-on:click="postArticle">Submit</button>
  </div>
</template>

<style></style>