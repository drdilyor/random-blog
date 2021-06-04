<template>
  <div v-if="author">
    <h2>{{ author | authorName }}</h2>
    <a :href="author.website" target="_blank" rel="noopener noreferrer">
      Website
    </a>
    <p>{{ author.bio }}</p>
    <h3>Posts by {{ author | authorName }}</h3>
    <post-list :posts="author.postSet" :showAuthor="false" />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import PostList from '@/components/PostList'

export default {
  components: { PostList },
  data() {
    return {
      author: null,
    }
  },
  async created() {
    const author = await this.$apollo.query({
      query: gql`query ($username: String!) {
        authorByUsername(username: $username) {
          website
          bio
          user {
            firstName
            lastName
            username
          }
          postSet {
            title
            subtitle
            publishedAt
            published
            metaDescription
            slug
            tags {
              name
            }
          }
        }
      }
      `,
      variables: this.$route.params,
    })
    this.author = author.data.authorByUsername
  }
}
</script>
