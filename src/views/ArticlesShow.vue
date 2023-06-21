<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      article: {},
      admin: localStorage.getItem("admin") === "true"
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
    },
    confirmDelete() {
      document.querySelector("#confirmDelete").showModal()
    },
    deleteArticle() {
      console.log("deleting article")
      axios.delete(`http://localhost:3000/articles/${this.article.id}.json`).then(response => {
        console.log(response.data)
        this.$router.push("/articles")
      })
    },
    showUpdate() {
      document.querySelector("#showUpdate").showModal()
    },
    updateArticle() {
      console.log("updating Article")
      let article = { title: document.querySelector("#newTitle").value, text: document.querySelector("#newText").value }
      axios.patch(`http://localhost:3000/articles/${this.article.id}.json`, article).then(response => {
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
    <div v-if="admin">
      <button v-on:click="confirmDelete">delete</button>
      <button v-on:click="showUpdate">update</button>
    </div>
    <dialog id="confirmDelete">
      <form method="dialog">
        <p>Are you sure you want to delete?</p>
        <button v-on:click="deleteArticle">Yes, remove it!</button>
        <button>No, don't delete my article!</button>
      </form>
    </dialog>
    <dialog id="showUpdate">
      <form method="dialog">
        <label>Title: </label><input id="newTitle" type="text" :value="article.title"><br />
        <label>text: </label><input id="newText" type="text" :value="article.text"><br />
        <button v-on:click="updateArticle">Accept Changes</button>
        <button>Reject Changes</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>