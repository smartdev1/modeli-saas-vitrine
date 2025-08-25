<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pourquoi choisir MODELI ?
          </h2>
          <div class="space-y-6">
            <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start space-x-4">
              <div class="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center mt-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
                <p class="text-gray-600">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg">
          <div class="text-center mb-6">
            <div class="text-4xl font-bold text-primary-600 mb-2">94%</div>
            <p class="text-gray-600">de nos clients nous recommandent</p>
          </div>
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <div class="flex text-yellow-400">
                <span v-for="i in 5" :key="i">★</span>
              </div>
              <span class="text-gray-600">4.8/5 - 500+ avis</span>
            </div>
            <blockquote class="text-gray-700 italic">
              "MODELI a révolutionné notre façon de traiter les dossiers d'investissement. 
              Nous gagnons 3h par dossier !"
            </blockquote>
            <div class="text-sm text-gray-500">
              — Sarah M., Directrice Investissement
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: "Simplicité d'utilisation",
    description: "Interface intuitive conçue pour les professionnels de l'immobilier, sans formation complexe."
  },
  {
    title: "Puissance de calcul",
    description: "Moteur de calcul avancé qui traite tous vos scénarios en temps réel."
  },
  {
    title: "Solution SaaS complète",
    description: "Accessible partout, mises à jour automatiques, sauvegarde cloud sécurisée."
  },
  {
    title: "Support expert",
    description: "Équipe française dédiée, formation incluse et support réactif."
  }
]
</script>