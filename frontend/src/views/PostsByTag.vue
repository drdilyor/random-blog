<template>
  <div>
    <h2>Posts in #{{  $route.params.tag }}</h2>
    <post-list v-if="posts" :posts="posts" />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import PostList from '@/components/PostList'

export default {
  components: { PostList },
  data() {
    return {
      posts: null,
    }
  },
  async created() {
    const posts = await this.$apollo.query({
      query: gql`query ($tag: String!)  {
        postsByTag (tag: $tag) {
          title
          subtitle
          publishedAt
          published
          metaDescription
          slug
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
      }`,
      variables: this.$route.params,
    })
    this.posts = posts.data.postsByTag
  }
}
</script>
