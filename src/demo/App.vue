<template>
  <component :is="Icon" v-for="Icon in ComponentNames"/>
</template>

<script>
import * as Icons from '../../dist/eve-icons'

export default {
  name: 'DemoApp',
  components: {
    ...Icons
  },
  computed: {
    ComponentNames () {
      return Object.keys(Icons)
    }
  }
}
</script>

<style scoped>

</style>
