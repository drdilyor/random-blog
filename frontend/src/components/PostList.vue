<template>
  <div>
    <div
      v-for="post in publishedPosts"
      :key="post.slug"
      @click="$router.push(`/post/${post.slug}`)">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ post.title }}: {{ post.subtitle }}</div>
            </md-card-header-text>
          </md-card-header>
          <md-card-content>
            <div>{{ post.metaDescription }}</div>
            <p></p> <!-- spacer -->
            <div>
              <template v-if="showAuthor">
                <md-icon>person</md-icon>
                <author-link style="margin-right: 1em" :author="post.author" />
              </template>
              <md-icon>calendar_today</md-icon>
              {{ post.publishedAt | date }}
            </div>
          </md-card-content>
        </md-ripple>
      </md-card>
    </div>
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

<style>
.md-card {
  user-select: none;
}
</style>
