<template>
  <HeroSection />
  <div class="section-padding">
    <div class="container-custom">
      <!-- Hero -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Fonctionnalités complètes pour vos projets immobiliers
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez tous les outils intégrés dans MODELI pour analyser, 
          modéliser et optimiser vos investissements immobiliers
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div v-for="feature in detailedFeatures" :key="feature.title" 
             class="flex items-start space-x-6">
          <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <component :is="feature.icon" class="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600 mb-4">{{ feature.description }}</p>
            <ul class="space-y-2">
              <li v-for="item in feature.items" :key="item" class="flex items-start space-x-2">
                <svg class="w-4 h-4 text-success-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-primary-50 rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Prêt à découvrir toutes ces fonctionnalités ?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Essayez MODELI pendant 14 jours
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary text-lg px-8 py-4">
            Demander un devis
          </NuxtLink>
          <button class="btn-secondary text-lg px-8 py-4">
            Voir la démo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Fonctionnalités - MODELI',
  description: 'Découvrez toutes les fonctionnalités de MODELI : gestion de projets, calculs financiers, rapports, collaboration et bien plus.',
})

const detailedFeatures = [
  {
    title: "Gestion de projets immobiliers",
    description: "Organisez et suivez tous vos projets depuis un tableau de bord intuitif.",
    icon: "IconFolder",
    items: [
      "Création et organisation de projets illimités",
      "Tableau de bord personnalisable",
      "Suivi des étapes et jalons",
      "Archivage et historique complet"
    ]
  },
  {
    title: "Modélisation financière avancée",
    description: "Créez des modèles financiers précis avec des scénarios multiples.",
    icon: "IconChart",
    items: [
      "Scénarios optimiste/réaliste/pessimiste",
      "Intégration des coûts et revenus",
      "Prise en compte de l'inflation",
      "Sensibilité et stress tests"
    ]
  },
  {
    title: "Calculs d'indicateurs clés",
    description: "Tous les indicateurs financiers calculés automatiquement.",
    icon: "IconCalculator",
    items: [
      "VAN (Valeur Actuelle Nette)",
      "TRI (Taux de Rentabilité Interne)",
      "ROI et rentabilité locative",
      "Payback et cash-flow cumulé"
    ]
  },
  {
    title: "Rapports professionnels",
    description: "Générez des rapports prêts à partager avec vos partenaires.",
    icon: "IconDocument",
    items: [
      "Export PDF personnalisable",
      "Tableaux Excel détaillés",
      "Graphiques et visualisations",
      "Branding personnalisé"
    ]
  },
  {
    title: "Collaboration d'équipe",
    description: "Travaillez en équipe avec des droits d'accès granulaires.",
    icon: "IconUsers",
    items: [
      "Gestion multi-utilisateurs",
      "Rôles et permissions",
      "Commentaires et annotations",
      "Historique des modifications"
    ]
  },
  {
    title: "Intégrations et API",
    description: "Connectez MODELI à votre écosystème d'outils existants.",
    icon: "IconApi",
    items: [
      "API REST complète",
      "Webhooks en temps réel",
      "Intégrations CRM",
      "Export automatisé"
    ]
  }
]
</script>