<template>
  <section class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Derniers articles du blog
        </h2>
        <p class="text-xl text-gray-600">
          Conseils, analyses et tendances du marché immobilier
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <article v-for="article in articles" :key="article.slug" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="aspect-video bg-gray-200"></div>
          <div class="p-6">
            <div class="text-sm text-primary-600 font-medium mb-2">{{ article.category }}</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              <NuxtLink :to="`/blog/${article.slug}`" class="hover:text-primary-600 transition-colors">
                {{ article.title }}
              </NuxtLink>
            </h3>
            <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
            <div class="flex items-center text-sm text-gray-500">
              <span>{{ article.date }}</span>
              <span class="mx-2">•</span>
              <span>{{ article.readTime }} min de lecture</span>
            </div>
          </div>
        </article>
      </div>

      <div class="text-center">
        <NuxtLink to="/blog" class="btn-secondary">
          Voir tous les articles
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const articles = [
  {
    title: "Comment calculer le TRI de votre investissement immobilier",
    excerpt: "Guide complet pour comprendre et calculer le Taux de Rentabilité Interne de vos projets immobiliers.",
    category: "Guides",
    date: "15 Jan 2025",
    readTime: 8,
    slug: "calculer-tri-investissement-immobilier"
  },
  {
    title: "Tendances du marché immobilier 2025",
    excerpt: "Analyse des principales tendances qui vont impacter vos investissements cette année.",
    category: "Marché",
    date: "10 Jan 2025",
    readTime: 6,
    slug: "tendances-marche-immobilier-2025"
  },
  {
    title: "Financement participatif vs financement traditionnel",
    excerpt: "Comparaison détaillée des différentes options de financement pour vos projets immobiliers.",
    category: "Financement",
    date: "5 Jan 2025",
    readTime: 7,
    slug: "financement-participatif-vs-traditionnel"
  }
]
</script>