<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Navigation Bar -->
    <nav class="bg-white dark:bg-gray-800 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Left side - Logo and main nav -->
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-xl font-bold text-gray-800 dark:text-white"
                >Vue App</span
              >
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link
                to="/"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium"
                :class="[
                  $route.path === '/'
                    ? 'border-b-2 border-indigo-500 text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white',
                ]"
              >
                Home
              </router-link>
              <router-link
                to="/setting"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium"
                :class="[
                  $route.path === '/setting'
                    ? 'border-b-2 border-indigo-500 text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white',
                ]"
              >
                Settings
              </router-link>
              <!-- Van Section -->
              <div class="relative group">
                <button
                  class="inline-flex items-center px-1 pt-1 text-sm font-medium h-full text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
                >
                  Ecommerce
                  <svg
                    class="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <!-- Dropdown Menu -->
                <div
                  class="absolute top-14 left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block"
                >
                  <div class="py-1">
                    <router-link
                      to="/ecommerce/products"
                      class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Products
                    </router-link>
                    <router-link
                      to="/ecommerce/basket"
                      class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Basket
                    </router-link>
                  </div>
                </div>
              </div>
              <router-link
                to="/market"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium"
                :class="[
                  $route.path === '/market'
                    ? 'border-b-2 border-indigo-500 text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white',
                ]"
              >
                market
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>
