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
