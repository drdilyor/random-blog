<template>
  <router-link
      :to="`/author/${author.user.username}`"
  >{{ author | authorName }}</router-link>
</template>

<script>
export default {
  props: {
    author: { type: Object, required: true },
  },
}
</script>
