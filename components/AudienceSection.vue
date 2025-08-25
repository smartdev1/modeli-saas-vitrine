<template>
  <section class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Une solution adaptée à tous les professionnels
        </h2>
        <p class="text-xl text-gray-600">
          Investisseurs, promoteurs etc... MODELI s'adapte à vos besoins
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div v-for="audience in audiences" :key="audience.title" class="text-center">
          <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <component :is="audience.icon" class="w-10 h-10 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ audience.title }}</h3>
          <p class="text-gray-600">{{ audience.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconInvestor from '@/assets/icons/invest.svg'
import IconPromote from '@/assets/icons/promote.svg'
const audiences = [
  {
    title: "Investisseurs",
    description: "Évaluez rapidement la rentabilité de vos investissements immobiliers.",
    icon: IconInvestor
  },
  {
    title: "Promoteurs",
    description: "Pilotez vos opérations de promotion immobilière avec précision.",
    icon: IconPromote
  },
  // {
  //   title: "Banques",
  //   description: "Analysez les dossiers de financement avec des outils professionnels.",
  //   icon: "IconBank"
  // },
  // {
  //   title: "Gestionnaires",
  //   description: "Optimisez la gestion de vos portefeuilles immobiliers.",
  //   icon: "IconPortfolio"
  // }
]
</script>