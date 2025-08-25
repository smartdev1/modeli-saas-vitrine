<!-- components/HeroSection.vue -->
<template>
  <section 
    class="section-padding bg-gradient-to-br from-primary-50 to-blue-100 relative bg-cover bg-center"
    :style="backgroundImage ? `background-image: url(${backgroundImage})` : ''"
  >
    <div class="absolute inset-0 bg-white/80"></div> <!-- overlay -->
    <div class="container-custom relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Modélisation financière 
          <span class="text-primary-600">immobilière</span> 
          simplifiée
        </h1>
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          Créez vos scénarios financiers, calculez VAN, TRI et ROI en quelques clics. 
          La solution SaaS préférée des investisseurs et promoteurs immobiliers.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary text-lg px-8 py-4">
            Demander un devis gratuit
          </NuxtLink>
          <NuxtLink to="/pricing" class="btn-secondary text-lg px-8 py-4">
            Voir la démo
          </NuxtLink>
        </div>
        <p class="text-sm text-gray-500 mt-4">
          ✓ Essai gratuit 14 jours • ✓ Sans engagement • ✓ Support français
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  backgroundImage: {
    type: String,
    default: ''
  }
})
</script>
