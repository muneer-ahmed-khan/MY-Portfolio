<template>
  <div :id="load ? 'preloader' : 'preloader-none'"></div>
</template>

<script>
export default {
  name: 'PreLoader',
  props: {
    load: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: #0c0513;
  background-image: url(../assets/preloader.svg);
  background-repeat: no-repeat;
  background-position: center;
}

#preloader-none {
  opacity: 0;
}
</style>
