<template>
  <div>
    <ol class="post-list">
      <li v-for="post in publishedPosts" class="post">
        <h3>
          <router-link :to="`/post/${post.slug}`">
            {{ post.title }}: {{ post.subtitle }}
          </router-link>
        </h3>
        <span v-if="showAuthor">
          by <author-link :author="post.author" />
        </span>
        <div>{{ post.publishedAt | date }}</div>
        <p>{{ post.metaDescription }}</p>
      </li>
    </ol>
  </div>
</template>

<script>
import AuthorLink from '@/components/AuthorLink'

export default {
  components: { AuthorLink },
  props: {
    posts: Array,
    showAuthor: { type: Boolean, default: true },
  },
  computed: {
    publishedPosts() {
      return this.posts.filter(i => i.published)
    }
  },
}
</script>
