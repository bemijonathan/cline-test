<template>
  <section class="flex flex-wrap md:flex-no-wrap">
    <div class="md:w-1/2 lg:-mx-5 w-full">
      <Search class="mx-5 mb-5" />
      <SearchResult class="mx-5" />
    </div>
    <aside class="md:w-1/2 mx-5 w-full mt-5 md:mt-0">
      <AsideComponent />
    </aside>
  </section>
</template>
<script>
import SearchResult from './SearchResult.vue'
import AsideComponent from './Aside.vue'
import Search from '~/components/Content.vue'

export default {
  components: {
    Search,
    SearchResult,
    AsideComponent,
  },
}
</script>
<style scoped></style>
