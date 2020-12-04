<template>
  <div class="mx-auto bg-gray-300">
    <div class="fixed z-10 md:block md:relative w-full">
      <Nav />
    </div>
    <div class="lg:flex relative flex-wrap">
      <div class="w-full lg:w-1/4">
        <Sidenav />
      </div>
      <div class="min-h-screen w-full lg:w-3/4">
        <Content />
      </div>
    </div>
  </div>
</template>
<script>
import Nav from './Nav'
import Sidenav from './Sidenav'
import Content from './Content'
export default {
  components: {
    Nav,
    Sidenav,
    Content,
  },
}
</script>
<style scoped></style>
