<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blogs" },
  { name: "Forum", href: "/chat" },
  { name: "dashboard", href: "/dashboard" },
];
</script>

<template>
  <header class="z-30 flex items-center w-full sm:h-24">
    <div class="container flex items-center justify-between px-6 mx-auto">
      <div class="flex items-center text-3xl font-black text-gray-800 dark:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path
            d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>

        <span class="mt-1 ml-3 text-xs">cecepjanuardi31@gmail.com</span>
      </div>
      <div class="flex items-center">
        <nav class="items-center hidden text-lg text-gray-800 font-sen dark:text-white lg:flex">

          <RouterLink v-for="value in navigation" to={value.href} class="px-6 py-2">{{ value.name }}</RouterLink>
          <!-- {navigation.map((key, i) => (
              <Link
                key={i}
                to={key.href}
                class="flex px-6 py-2 hover:text-black"
              >
                {key.name}
              </Link>
            ))} -->
        </nav>
        <button class="flex flex-col ml-4 lg:hidden">
          <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
          <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
          <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
        </button>
      </div>
    </div>
  </header>

</template>