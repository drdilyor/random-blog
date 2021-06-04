<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1>Awesome Blog</h1>
      </router-link>
    </header>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2 {
  color: #2c3e50;
}
</style>
