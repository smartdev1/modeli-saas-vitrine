<template>
  <section class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tout ce dont vous avez besoin pour vos projets immobiliers
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Des outils puissants et intuitifs pour analyser la rentabilité de vos investissements immobiliers
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.title" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <component :is="feature.icon" class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconFolder from '@/assets/icons/folder.svg'
import IconChart from '@/assets/icons/chart.svg'
import IconCalculator from '@/assets/icons/calculator.svg'
import IconDocument from '@/assets/icons/document.svg'
import IconUsers from '@/assets/icons/users.svg'
import IconApi from '@/assets/icons/api.svg'

const features = [
  {
    title: "Gestion de projets",
    description: "Organisez vos projets immobiliers avec un tableau de bord intuitif et des outils de suivi avancés.",
    icon: IconFolder
  },
  {
    title: "Scénarios multiples",
    description: "Créez des scénarios best/base/worst case pour anticiper tous les cas de figure.",
    icon: IconChart
  },
  {
    title: "Calculs financiers",
    description: "VAN, TRI, ROI, cash-flow... Tous les indicateurs clés calculés automatiquement.",
    icon: IconCalculator
  },
  {
    title: "Rapports PDF/Excel",
    description: "Générez des rapports professionnels prêts à être partagés avec vos partenaires.",
    icon: IconDocument
  },
  {
     title: "Multi-utilisateurs",
     description: "Collaborez en équipe avec des droits d'accès granulaires et un historique des modifications.",
     icon: IconUsers
   },
   {
     title: "API & Intégrations",
     description: "Connectez MODELI à vos outils existants grâce à notre API REST complète.",
     icon: IconApi
   }
]
</script>