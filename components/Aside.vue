<template>
  <div>
    <section class="bg-white rounded-lg p-8 w-full">
      <div class="flex items-center mt-2 mb-6">
        <div class="rounded-full p-2">
          <i class="fas fa-leaf text-green-500 lg:text-3xl text-2xl"></i>
        </div>
        <div class="ml-4 text-gray-500 text-2xl font-medium">Khan Academy</div>
      </div>
      <div class="">
        <h3 class="font-semibold lg:text-3xl text-2xl mb-0">
          Late night ideas
        </h3>
        <div class="mt-2">
          <p class="text-xl lg:text-2xl text-gray-800 font-light">
            The other possibility is that tilt doesn't give a shit about me,
            since i'm a man ove the age of 37. It's those darn millennials,
            raised on shrieking commercials and brain-rotting soda pop, that
            they wish to woo.
          </p>
        </div>
      </div>
      <comment />
    </section>
    <section class="bg-white rounded-lg mt-4 overflow-hidden">
      <div class="p-8 ml-4 text-gray-500 text-2xl font-medium">YouTube</div>
      <div>
        <img
          src="https://st2.depositphotos.com/1594308/5547/i/950/depositphotos_55474203-stock-photo-friends-dancing-at-party.jpg"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  components: { Comment },
}
</script>
