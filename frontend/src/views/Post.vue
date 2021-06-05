<template>
  <div v-if="post">
    <h2>{{  post.title }}: {{ post.subtitle }}</h2>
    <md-icon>person</md-icon>
    <author-link :author="post.author" />
    <md-icon>calendar</md-icon>{{ post.publishedAt | date }}
    <p>{{ post.metaDescription }}</p>
    <article class="md-content">{{ post.body }}</article>
    <div class="us">
      <md-chip
        v-for="tag in post.tags"
        :key="tag.name"
        md-clickable
        @click="$router.push(`/tag/${tag.name}`)">
        {{ tag.name }}
      </md-chip>
    </div>
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
      chips: [],
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
<style>
.us {
  user-select: none;
}
</style>
