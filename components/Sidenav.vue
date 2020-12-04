<template>
  <section>
    <div class="flex flex-col px-5 t-0 b-0 hidden lg:block">
      <div class="flex flex-col">
        <div
          class="bg-gray-400 p-2 mt-8 rounded-lg w-full flex justify-between items-center"
        >
          <span class="text-2xl font-semibold __all">All</span>
          <span class="text-base __all font-thin">34 Results</span>
        </div>
        <ul class="mt-4 list-none p-2">
          <li class="text-gray-600 text-2xl my-3">Images</li>
          <li class="text-gray-600 text-2xl my-4">Videos</li>
        </ul>
      </div>
      <div class="mt-12 flex flex-col px-2">
        <div class="text-bold">Sources</div>
        <div class="mt-2 flex flex-col">
          <div v-for="(link, i) in sources" :key="i" class="flex mt-3">
            <div>
              <i :class="link.font"></i>
            </div>
            <div class="ml-4">
              <p class="text-gray-600 text-xl">{{ link.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showMenu"
      class="flex flex-col px-5 fixed t-0 b-0 lg:hidden bg-white h-screen w-full"
    >
      <div class="flex flex-col">
        <div
          class="bg-gray-400 p-2 mt-8 rounded-lg w-full flex justify-between items-center"
        >
          <span class="text-2xl font-semibold __all">All</span>
          <span class="text-base __all font-thin">34 Results</span>
        </div>
        <ul class="mt-4 list-none p-2">
          <li class="text-gray-600 text-2xl my-3">Images</li>
          <li class="text-gray-600 text-2xl my-4">Videos</li>
        </ul>
      </div>
      <div class="mt-12 flex flex-col px-2">
        <div class="text-bold">Sources</div>
        <div class="mt-2 flex flex-col">
          <div v-for="(link, i) in sources" :key="i" class="flex mt-3">
            <div>
              <i :class="link.font"></i>
            </div>
            <div class="ml-4">
              <p class="text-gray-600 text-xl">{{ link.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      sources: [
        {
          font: 'fas fa-link text-sm text-gray-600',
          text: 'Edittwist',
        },
        {
          font: 'fab fa-google text-sm text-gray-600',
          text: 'Google',
        },
        {
          font: 'fab fa-youtube text-sm text-gray-600',
          text: 'Youtube',
        },
        {
          font: 'fab fa-wikipedia-w text-sm text-gray-600',
          text: 'Wikipedia',
        },
        {
          font: 'fas fa-school text-sm text-gray-600',
          text: 'Khan Academy',
        },
        {
          font: 'fas fa-book-reader text-sm text-gray-600',
          text: 'NewYork Public Library',
        },
      ],
    }
  },
  computed: {
    showMenu() {
      return this.$store.state.menu.showMenu
    },
  },
}
</script>
<style scoped>
.all {
  color: #37352f;
}
</style>
