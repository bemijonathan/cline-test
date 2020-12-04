<template>
  <div class="w-full shadow bg-white mb-4">
    <div class="flex justify-between items-center pt-8 px-8 pb-4">
      <div class="flex justify-between items-center md:w-2/5 w-4/5">
        <div>
          <a href="#" class="text-2xl"
            >Logo
            <img src="" alt="" />
          </a>
        </div>
        <div class="ml-4 relative hiddedn md:block flex-grow">
          <input
            type="text"
            placeholder="Generation Y"
            class="__gen text-base w-full focus:outline-none py-2 pl-3 rounded-lg w-full"
          />
          <div class="absolute __search">
            <i class="fas fa-search text-sm"></i>
          </div>
        </div>
        <div class="ml-4 hidden md:block">
          <a href="#" class="text-xl font-bold __help">Help</a>
        </div>
      </div>
      <div class="flex justify-between items-center hidden md:flex">
        <div>
          <i class="fas fa-plus text-base __help"></i>
        </div>
        <div
          class="ml-4 rounded-full bg-indigo-500 h-10 w-10 flex items-center justify-center text-center"
        >
          <i class="fas fa-plus text-base text-white"></i>
        </div>
        <button
          class="ml-4 rounded-full bg-black h-10 w-10 text-center flex items-center justify-center text-xl text-white font-light outline-none focus:outline-none"
          @click="
            $auth.logout()
            $router.push('/login')
          "
        >
          F
        </button>
      </div>
      <button
        v-if="showMenu"
        class="flex justify-between items-center block md:hidden outline-none focus:outline-none px-3 py-1"
        @click="show(false)"
      >
        Close Menu
      </button>
      <button
        v-else
        class="flex justify-between items-center block md:hidden outline-none focus:outline-none px-3 py-1"
        @click="show(true)"
      >
        Menu
      </button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    showMenu() {
      return this.$store.state.menu.showMenu
    },
  },
  methods: {
    show(payload) {
      this.$store.commit('menu/toogleMenu', payload)
    },
  },
}
</script>
<style scoped>
.__gen {
  background: #dde3e8;
  color: #37352f;
}
.__gen::placeholder {
  color: #37352f;
  font-weight: bold;
}
.__search {
  top: 5px;
  right: 12px;
  color: #37352f;
}
.__help {
  color: #b9c3cc;
}
.line {
  border: 1px solid #dde3e8;
}
</style>
