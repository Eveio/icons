import Vue from 'vue'
import IconBase from './IconBase.vue'

export default function (name: string) {
  return Vue.extend({
    name,
    components: {
      IconBase
    }
  })
}
