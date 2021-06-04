<template>
  <div>
    <h2>Recent posts</h2>
    <post-list v-if="allPosts" :posts="allPosts" />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import PostList from '@/components/PostList'

export default {
  components: { PostList },
  data() {
    return {
      allPosts: null,
    }
  },
  async created() {
    const posts = await this.$apollo.query({
      query: gql`query {
        allPosts {
          title
          subtitle
          publishedAt
          published
          slug
          metaDescription
          author {
            user {
              firstName
              lastName
              username
            }
          }
          tags {
            name
          }
        }
      }`
    })
    this.allPosts = posts.data.allPosts
  }
}
</script>
