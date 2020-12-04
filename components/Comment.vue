<template>
  <div>
    <div class="flex items-center my-8 text-xl items-center -mx-2">
      <button
        class="mb-0 text-indigo-400 font-light outline-none focus:outline-none mx-2"
      >
        Repost
      </button>

      <i class="fas fa-circle text-indigo-400 text-xs mx-2"></i>

      <div class="mx-2">
        <p class="text-indigo-400 font-light mb-0">Share</p>
      </div>
    </div>

    <div class="flex items-center justify-start mt-5 -mx-5">
      <button
        class="h-12 w-12 bg-black text-white rounded-full flex items-center justify-center mx-5 p-5"
      >
        F
      </button>
      <div class="w-full">
        <input
          type="text"
          placeholder="Add a comment "
          class="w-full rounded-full py-1 px-3 bg-gray-300 text-base focus:outline-none text-base h-12"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
