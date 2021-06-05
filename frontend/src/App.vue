<template>
  <md-app class="app">
    <md-app-toolbar md-waterfall md-mode="fixed" class="md-primary">
      <md-button class="md-icon-button" @click="toggleMenu">
        <md-icon>menu</md-icon>
      </md-button>
      <md-button md-large @click="$router.push('/')">My Blog</md-button>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible" md-permanent="clipped">
      <md-list>
        <md-list-item
          v-for="item in navItems"
          :key="item.text"
          :[toOrHref(item.path)]="item.path"
          active-class="blah-blah-blah"
          exact-active-class="router-link-active"
        >
          <md-icon>{{ item.icon }}</md-icon>
          <span class="md-list-item-text">{{ item.text }}</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  data: () => ({
    menuVisible: false,
    navItems: [
      { icon: 'home', path: '/', text: 'All posts' },
      { icon: 'star', path: 'https://github.com/drdilyor', text: 'GitHub' },
      { icon: 'message', path: 'https://t.me/drdilyor', text: 'Contact' },
    ]
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
    toOrHref(path) {
      return path[0] == '/' ? 'to': 'href'
    }
  }
}
</script>

<style>
html, body, .app {
  min-height: 100vh;
}

.md-drawer {
  max-width: 16.18em !important;
}
</style>
