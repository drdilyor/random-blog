<template>
  <div v-if="post">
    <h2>{{  post.title }}: {{ post.subtitle }}</h2>
    By <author-link :author="post.author" />
    <div>{{ post.publishedAt | date }}</div>
    <p>{{ post.metaDescription }}</p>
    <article>{{ post.body }}</article>
    <ul>
      <li v-for="tag in post.tags" :key="tag.name">
        <router-link :to="`/tag/${tag.name}`">{{ tag.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import AuthorLink from '@/components/AuthorLink'

export default {
  components: { AuthorLink },
  data() {
    return {
      post: null,
    }
  },
  async created() {
    const post = await this.$apollo.query({
      query: gql`query ($slug: String!) {
        postBySlug(slug: $slug) {
          title
          subtitle
          publishedAt
          metaDescription
          slug
          body
          author {
            user {
              username
              firstName
              lastName
            }
          }
          tags {
            name
          }
        }
      }`,
    variables: this.$route.params,
    })
    this.post = post.data.postBySlug
  }
}
</script>
