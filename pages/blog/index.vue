<template>
  <div>
    <!-- Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-blue-100">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Blog MODELI
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Conseils d'experts, analyses de marché et guides pratiques 
          pour optimiser vos investissements immobiliers
        </p>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="article in articles" :key="article.slug" 
                   class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            
            <!-- Image -->
            <div class="aspect-video bg-gray-200">
              <img :src="article.image" 
                   alt="Image article"
                   class="w-full h-full object-cover" />
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-3">
                <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {{ article.category }}
                </span>
                <span class="text-gray-500 text-sm">{{ article.date }}</span>
              </div>
              <h2 class="text-xl font-semibold text-gray-900 mb-3">
                <NuxtLink :to="`/blog/${article.slug}`" class="hover:text-primary-600 transition-colors">
                  {{ article.title }}
                </NuxtLink>
              </h2>
              <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>{{ article.author }}</span>
                <span>{{ article.readTime }} min de lecture</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More -->
        <div class="text-center mt-16">
          <button class="btn-secondary">
            Charger plus d'articles
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Blog - MODELI',
  description: 'Découvrez nos articles sur l\'investissement immobilier, la modélisation financière et les tendances du marché.',
})

const imgUrlbase = "https://images.unsplash.com/photo-"

const articles = [
  {
    title: "Comment calculer le TRI de votre investissement immobilier",
    excerpt: "Guide complet pour comprendre et calculer le Taux de Rentabilité Interne de vos projets immobiliers avec des exemples concrets.",
    category: "Guides",
    date: "15 Jan 2025",
    author: "Ashley Soungole",
    readTime: 8,
    slug: "calculer-tri-investissement-immobilier",
    image: `${imgUrlbase}1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    title: "Tendances du marché immobilier 2025",
    excerpt: "Analyse des principales tendances qui vont impacter vos investissements cette année : taux, zones géographiques, types de biens.",
    category: "Marché",
    date: "10 Jan 2025",
    author: "Aristide Adouko",
    readTime: 6,
    slug: "tendances-marche-immobilier-2025",
    image: `${imgUrlbase}1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    title: "Financement participatif vs financement traditionnel",
    excerpt: "Comparaison détaillée des différentes options de financement pour vos projets immobiliers avec leurs avantages et inconvénients.",
    category: "Financement",
    date: "5 Jan 2025",
    author: "Aristide Adouko",
    readTime: 7,
    slug: "financement-participatif-vs-traditionnel",
    image: `${imgUrlbase}1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    title: "Optimiser la fiscalité de ses investissements locatifs",
    excerpt: "Stratégies et dispositifs fiscaux pour réduire l'imposition de vos revenus locatifs : LMNP, SCI, déficit foncier...",
    category: "Fiscalité",
    date: "28 Déc 2024",
    author: "Ashley Songole",
    readTime: 10,
    slug: "optimiser-fiscalite-investissements-locatifs",
    image: `${imgUrlbase}1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    title: "Analyse de rentabilité : étude de cas pratique",
    excerpt: "Étude détaillée d'un projet d'investissement locatif avec MODELI : de l'acquisition à la revente en passant par la gestion.",
    category: "Cas pratiques",
    date: "20 Déc 2024",
    author: "Ashley Soungole",
    readTime: 12,
    slug: "analyse-rentabilite-etude-cas",
    image: `${imgUrlbase}1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    title: "Les pièges à éviter en promotion immobilière",
    excerpt: "Les erreurs courantes dans les projets de promotion immobilière et comment les anticiper avec une bonne modélisation.",
    category: "Promotion",
    date: "15 Déc 2024",
    author: "Aristide Adouko",
    readTime: 9,
    slug: "pieges-eviter-promotion-immobiliere",
    image: `${imgUrlbase}1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  }
]
</script>
