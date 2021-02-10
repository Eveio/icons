<template>
  <section class="wrapper">
    <header>
      <h1>eve-icons</h1>
    </header>

    <ul>
      <li v-for="Icon in ComponentNames" :key="Icon">
        <component :is="Icon" />
        <span>{{ Icon }}</span>
      </li>
    </ul>

    <footer>
      <p>
        a project by <a href="https://eve.io">eve.io</a>
        |
        <a href="https://github.com/Eveio/icons">view on GitHub</a>
      </p>
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import * as Icons from '../index'

export default Vue.extend({
  name: 'DemoApp',
  components: {
    ...Icons
  },
  computed: {
    ComponentNames (): string[] {
      return Object.keys(Icons).filter(name => name !== 'default')
    }
  }
})
</script>

<style>
html {
  padding: 0;
}

body, html {
  font-family: sans-serif;
  font-size: 16px;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
}

body {
  padding: 1rem 4rem;
}

header {
  border-bottom: 1px solid #eee;
  margin-bottom: 2rem;
  padding: 2rem 0;
}

footer {
  border-top: 1px solid #eee;
  margin-top: 2rem;
  padding: 2rem 0;
  color: rgba(0, 0, 0, .7);
}

a {
  text-decoration: none;
  color: #b587ff;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

span {
  display: inline-block;
  margin-left: .5rem;
  color: rgba(0, 0, 0, .7);
}

h1 {
  font-size: 3rem;
  font-weight: 100;
}

@media only screen and (max-width: 667px) {
  body {
    padding: 1rem 2rem;
  }

  ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 320px) {
  body {
    padding: 1rem;
  }

  ul {
    grid-template-columns: 1fr;
  }
}
</style>
