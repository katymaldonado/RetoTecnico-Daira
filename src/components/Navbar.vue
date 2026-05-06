<template>
  <nav class="relative bg-gray-800">

    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">

        <!-- LOGO -->
        <div class="flex shrink-0 items-center">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            class="h-8 w-auto"
            alt="Logo"
          />
        </div>

        <!-- MENU DESKTOP -->
        <div class="hidden sm:block">
          <div class="flex space-x-4">

            <router-link
              to="/"
              class="rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-900"
            >
              Simulador
            </router-link>

            <router-link
              to="/historial"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Historial
            </router-link>

          </div>
        </div>

        <!-- ICONO NOTIFICACIONES -->
        <button
          class="relative rounded-full p-1 text-gray-400 hover:text-white"
        >
          <span class="sr-only">Notificaciones</span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="h-6 w-6"
          >
            <path
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- DROPDOWN (SIMPLIFICADO, SIN ELEMENT PLUS) -->
        <div class="relative ml-3">

          <button class="flex rounded-full">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              class="h-8 w-8 rounded-full"
            />
          </button>

        </div>

      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>