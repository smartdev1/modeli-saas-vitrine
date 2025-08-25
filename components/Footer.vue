<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo & Description -->
        <div class="md:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">M</span>
            </div>
            <span class="font-bold text-xl">MODELI</span>
          </div>
          <p class="text-gray-400 mb-4">
            Solution SaaS de modélisation financière immobilière pour professionnels.
          </p>
        </div>

        <!-- Product -->
        <div>
          <h3 class="font-semibold mb-4">Produit</h3>
          <div class="space-y-2">
            <NuxtLink to="/features" class="block text-gray-400 hover:text-white transition-colors">
              Fonctionnalités
            </NuxtLink>
            <NuxtLink to="/pricing" class="block text-gray-400 hover:text-white transition-colors">
              Tarifs
            </NuxtLink>
            <NuxtLink to="/contact" class="block text-gray-400 hover:text-white transition-colors">
              Demander un devis
            </NuxtLink>
          </div>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="font-semibold mb-4">Ressources</h3>
          <div class="space-y-2">
            <NuxtLink to="/blog" class="block text-gray-400 hover:text-white transition-colors">
              Blog
            </NuxtLink>
            <a href="#" class="block text-gray-400 hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" class="block text-gray-400 hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="font-semibold mb-4">Légal</h3>
          <div class="space-y-2">
            <NuxtLink to="/legal/cgu" class="block text-gray-400 hover:text-white transition-colors">
              CGU
            </NuxtLink>
            <NuxtLink to="/legal/privacy" class="block text-gray-400 hover:text-white transition-colors">
              Confidentialité
            </NuxtLink>
            <NuxtLink to="/legal/mentions" class="block text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 MODELI. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>