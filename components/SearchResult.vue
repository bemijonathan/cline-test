<template>
  <div class="bg-white rounded-lg p-8">
    <div class="mt-2 mb-6 flex items-center">
      <div class="rounded-full border border-solid border-black p-2 h-12 w-12">
        <i class="fas fa-chess-queen lg:text-3xl text-2xl"></i>
      </div>
      <div class="ml-4">
        <p class="text-gray-500 text-2xl font-medium">
          New York Public Library
        </p>
      </div>
    </div>
    <div>
      <b class="lg:text-3xl text-2xl">a Silicon Valley adventure Kaplan</b>,
      <p class="text-2xl text-gray-800 font-light mt-3">
        a well known figure in th e computer indusry, founded GO corporation in
        1987, and for ventures in the valley.<br />
        Startup tells the story of Kaplan's wild ride: how he assembled a
        brilliant but fractious team of engineers , software desigers, and
        investores; pioneered the emerging market for hand-held computers
        operated with a pen instead of a keyboard; and careened from crisis to
        crisis without ever losing his passion for a revolutionary idea.
      </p>
    </div>
    <comment />
  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  components: { Comment },
}
</script>
<style scoped>
.all {
  color: #37352f;
}
</style>
