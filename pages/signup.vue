<template>
  <section>
    <body class="bg-white font-family-karla h-screen">
      <div class="w-full flex flex-wrap">
        <!-- Register Section -->
        <div class="w-full md:w-1/2 flex flex-col">
          <div
            class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12"
          >
            <a href="#" class="bg-black text-white font-bold text-xl p-4"
              >Logo</a
            >
          </div>

          <div
            class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
          >
            <p class="text-center lg:text-3xl text-2xl">Join Us.</p>
            <div
              class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
            >
              <form
                class="flex flex-col pt-3 md:pt-8"
                onsubmit="event.preventDefault();"
              >
                <div class="flex flex-col pt-4">
                  <label for="name" class="text-lg">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Smith"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div class="flex flex-col pt-4">
                  <label for="email" class="text-lg">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div class="flex flex-col pt-4">
                  <label for="password" class="text-lg">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div class="flex flex-col pt-4">
                  <label for="confirm-password" class="text-lg"
                    >Confirm Password</label
                  >
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Password"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <input
                  type="submit"
                  value="Register"
                  class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                />
              </form>
              <div class="text-center mt-10">
                <button
                  class="bg-red-500 py-2 px-5 rounded-md focus:outline-none outline-none w-full"
                  @click="google"
                >
                  <svg
                    class="inline-block"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 18px"
                  >
                    <path
                      d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                      style="fill: white"
                    ></path>
                  </svg>
                  <span class="ml-1 text-white">Sign in with Google</span>
                </button>
              </div>
            </div>
            <div class="text-center pt-12 pb-12">
              <p>
                Already have an account?
                <n-link to="login" class="underline font-semibold"
                  >Log in here.
                </n-link>
              </p>
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="w-1/2 shadow-2xl">
          <img
            class="object-cover w-full h-screen hidden md:block"
            src="https://source.unsplash.com/IXUM4cJynP0"
          />
        </div>
      </div>
    </body>
  </section>
</template>

<script>
export default {
  methods: {
    async google() {
      await this.$auth.loginWith('google').catch((e) => console.log(e))
    },
  },
}
</script>
