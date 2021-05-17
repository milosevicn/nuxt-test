<template>
  <div class="container">
    <article v-if="post && post.title && post.content">
      <h1 class="title">{{ post.title.rendered }}</h1>
      <p v-html="post.content.rendered"></p>
    </article>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    head () {
      return {
        title: this.post.title,
        meta: [
          { name: 'twitter:title', content: this.post.title},
          { name: 'twitter:description', content: this.post.body},
          { name: 'twitter:image', content: 'https://i.imgur.com/UYP2umJ.png'},
          { name: 'twitter:card', content: 'summary_large_image'}
        ]
      }
    },
    async asyncData ({ params, payload }) {
        if (payload) {
            return {
              post: payload
            }
        } else {
          try {
           return axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id)
            .then((response) => {
                return {
                    post: response.data
                }
            }) 
          } catch (error) {
            console.log(error)
            return false
          }
        }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }
  article * {
    margin-bottom: 1rem;
  }
  aside {
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
  }
  .title {
    font-size: 2rem;
  }
</style>