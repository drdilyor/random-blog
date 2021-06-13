<template>
  <a
    class="author-link"
    :href="href"
    @click.stop.prevent="$router.push(href)"
  >{{ author | authorName }}</a>
</template>

<script>
export default {
  props: {
    author: { type: Object, required: true },
  },
  computed: {
    href() {
      return`/author/${this.author.user.username}`
    }
  }
}
</script>

<style>
.author-link {
  position: relative;
}
</style>
