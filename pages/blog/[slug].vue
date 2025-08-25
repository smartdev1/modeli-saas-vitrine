<template>
  <div>
    <!-- Article Header -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom max-w-4xl">
        <div class="text-center mb-8">
          <div class="flex items-center justify-center space-x-4 mb-6">
            <span class="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
              {{ article.category }}
            </span>
            <span class="text-gray-500">{{ article.date }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {{ article.title }}
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            {{ article.excerpt }}
          </p>
          <div class="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>Par {{ article.author }}</span>
            <span>•</span>
            <span>{{ article.readTime }} min de lecture</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="section-padding">
      <div class="container-custom max-w-4xl">
        <div class="prose prose-lg max-w-none">
          <div v-html="article.content"></div>
        </div>

        <!-- Author Bio -->
        <div class="bg-gray-50 rounded-2xl p-8 mt-16">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
              <span class="text-white text-xl font-bold">{{ article.author.charAt(0) }}</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">{{ article.author }}</h3>
              <p class="text-gray-600">Expert en modélisation financière immobilière chez MODELI</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-primary-50 rounded-2xl p-8 text-center mt-16">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Prêt à appliquer ces conseils ?
          </h3>
          <p class="text-gray-600 mb-6">
            Découvrez comment MODELI peut vous aider à optimiser vos investissements immobiliers
          </p>
          <NuxtLink to="/contact" class="btn-primary">
            Demander un devis gratuit
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

// Mock article data - in real app, this would come from a CMS or API
const article = {
  title: "Comment calculer le TRI de votre investissement immobilier",
  excerpt: "Guide complet pour comprendre et calculer le Taux de Rentabilité Interne de vos projets immobiliers avec des exemples concrets.",
  category: "Guides",
  date: "15 Jan 2025",
  author: "Sophie Martin",
  readTime: 8,
  content: `
    <h2>Introduction au TRI</h2>
    <p>Le Taux de Rentabilité Interne (TRI) est l'un des indicateurs les plus importants pour évaluer la rentabilité d'un investissement immobilier. Il représente le taux d'actualisation qui annule la Valeur Actuelle Nette (VAN) d'un projet.</p>
    
    <h2>Comment calculer le TRI ?</h2>
    <p>Le calcul du TRI nécessite de prendre en compte tous les flux de trésorerie du projet :</p>
    <ul>
      <li>L'investissement initial (négatif)</li>
      <li>Les revenus locatifs annuels</li>
      <li>Les charges et impôts</li>
      <li>La valeur de revente finale</li>
    </ul>
    
    <h2>Exemple concret</h2>
    <p>Prenons l'exemple d'un appartement acheté 200 000€ qui génère 12 000€ de revenus nets par an et revendu 250 000€ au bout de 10 ans.</p>
    
    <p>Avec MODELI, ce calcul est automatisé et vous pouvez facilement tester différents scénarios pour optimiser votre investissement.</p>
    
    <h2>Interpréter le résultat</h2>
    <p>Un TRI supérieur à votre coût de financement (taux d'emprunt + prime de risque) indique un investissement rentable. En général, un TRI immobilier supérieur à 8% est considéré comme attractif.</p>
  `
}

useSeoMeta({
  title: `${article.title} - Blog MODELI`,
  description: article.excerpt,
  ogTitle: article.title,
  ogDescription: article.excerpt,
})
</script>