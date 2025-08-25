<template>
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
    <div class="container-custom">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">M</span>
          </div>
          <span class="font-bold text-xl text-gray-900">MODELI</span>
        </NuxtLink>

        <!-- Navigation Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/features" class="text-gray-600 hover:text-primary-600 transition-colors">
            Fonctionnalités
          </NuxtLink>
          <NuxtLink to="/pricing" class="text-gray-600 hover:text-primary-600 transition-colors">
            Tarifs
          </NuxtLink>
          <NuxtLink to="/blog" class="text-gray-600 hover:text-primary-600 transition-colors">
            Blog
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-primary">
            Demander un devis
          </NuxtLink>
        </div>

        <!-- Menu Mobile -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600"
          :aria-expanded="mobileMenuOpen"
          aria-label="Menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Menu Mobile -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink to="/features" class="text-gray-600 hover:text-primary-600 transition-colors" @click="mobileMenuOpen = false">
            Fonctionnalités
          </NuxtLink>
          <NuxtLink to="/pricing" class="text-gray-600 hover:text-primary-600 transition-colors" @click="mobileMenuOpen = false">
            Tarifs
          </NuxtLink>
          <NuxtLink to="/blog" class="text-gray-600 hover:text-primary-600 transition-colors" @click="mobileMenuOpen = false">
            Blog
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-primary w-fit" @click="mobileMenuOpen = false">
            Demander un devis
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>