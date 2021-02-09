<template>
  <svg class="icon" :viewBox="viewBox" fill="none" xmlns="https://www.w3.org/2000/svg">
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: 'IconBase',

  props: {
    viewBox: {
      type: String,
      default: '0 0 40 40'
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  vertical-align: sub;
  width: 20px;
  height: 20px;

  &.icon-xs {
    width: 16px;
    height: 16px;
  }

  &.icon-m {
    width: 40px;
    height: 40px;
  }

  &.icon-l {
    width: 64px;
    height: 64px;
  }

  &.icon-xl {
    width: 96px;
    height: 96px;
  }

  &.icon-xxl {
    width: 128px;
    height: 128px;
  }
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}

::v-deep.rotate {
  animation: rotate 3s linear infinite;

  @for $i from 1 through 8 {
    path:nth-child(#{$i}) {
      opacity: 1 - (($i - 1) * 0.09);
    }
  }
}
</style>
