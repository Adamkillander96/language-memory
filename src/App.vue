<template>
  <div id="memory">
    <nav class="nav container" id="nav">
      <ul class="nav-list">
        <li class="nav-item left">
          <span class="link">Memory Game</span>
        </li>
        <li class="nav-item">
          <router-link class="link" exact to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="link" exact to="/how-to-play">About</router-link>
        </li>
      </ul>
    </nav>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" id="css-main">
@import "@/style/index.scss";

.nav-list {
  display: flex;
  flex-flow: row wrap;
}
.nav-item {
  flex: 0 0 auto;
  .link {
    display: block;
    padding: 1em;
    font-weight: 700;
    &.active {
      background: rgba(255, 255, 255, 0.05);
    }
  }
}

.left {
  margin-right: auto;
  font-family: $head-font;
}

@media (prefers-color-scheme: dark) {
}
</style>
