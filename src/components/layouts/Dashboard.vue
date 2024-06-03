<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Topbar from "../header/topbar.vue";
</script>

<template>
    <main class="relative h-screen overflow-hidden  dark:bg-gray-800">
      <div class="flex items-start justify-between">
        <div class="relative hidden h-screen shadow-lg lg:block w-80   ">
          <div class="flex h-full flex-col flex-1 space-y-1 bg-zinc-800 dark:bg-gray-700 text-gray-200 p-2 text-sm">
            <div class="flex justify-center my-5">
              <RouterLink to={mainbaseurl} class="rounded-xl">
                <img src="/pilput.png" alt="pilput" height="50" width="100" />
              </RouterLink>
            </div>
            <nav class="overflow-y-auto flex flex-1 flex-col border-b border-white/50">
              <RouterLink
                to="/"
                class="flex items-center my-2 justify-start w-full py-3 px-3 transition-colors duration-200 hover:bg-zinc-700 rounded-lg dark:text-white"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                </svg>
                <span class="mx-2 text-gray-200 font-normal">
                  Dashboard
                </span>
              </RouterLink>

              <RouterLink
                to="/user-management"
                class="flex items-center my-2 justify-start w-full py-3 px-3 transition-colors duration-200 hover:bg-zinc-700 rounded-lg dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>

                <span class="mx-2 text-gray-200 font-normal">
                  User management
                </span>
              </RouterLink>
              <RouterLink
                to="/posts"
                class="flex items-center my-2 justify-start w-full py-3 px-3 transition-colors duration-200 hover:bg-zinc-700 rounded-lg dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
                </svg>

                <span class="mx-2 text-gray-200 font-normal">Posts</span>
              </RouterLink>
            </nav>

            <a
              href={mainbaseurl}
              class="cursor-pointer flex space-x-2 py-3 items-center px-3 hover:bg-zinc-700 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span>Back To Home</span>
            </a>
          </div>
        </div>
        <div class="flex flex-col relative w-full h-screen p-3 bg-gray-200">
          <Topbar yourdata={yourdata} />
          <div class="h-full mt-5 overflow-y-auto">
            <slot ></slot>
          </div>
        </div>
      </div>
    </main>
</template>