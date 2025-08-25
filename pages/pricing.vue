<template>
  <div>
    <!-- Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-blue-100">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Choisissez le plan adapté à vos projets immobiliers
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Tarification transparente sans surprise. Commencez gratuitement 
          et évoluez selon vos besoins.
        </p>
      </div>
    </section>

    <!-- Pricing Table -->
    <PricingTable />

    <!-- Additional Benefits -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Inclus dans tous les plans
          </h2>
          <p class="text-xl text-gray-600">
            Des avantages essentiels pour votre réussite
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="benefit in benefits" :key="benefit.title" class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <component :is="benefit.icon" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Tarifs - MODELI',
  description: 'Découvrez nos plans tarifaires transparents. Essai gratuit 14 jours, sans engagement. Plans Basic, Pro et Entreprise.',
})

const benefits = [
  {
    title: "Sécurité maximale",
    description: "Chiffrement bancaire et hébergement français certifié",
    icon: "IconShield"
  },
  {
    title: "Support français",
    description: "Équipe dédiée et formation incluse",
    icon: "IconSupport"
  },
  {
    title: "Mises à jour gratuites",
    description: "Nouvelles fonctionnalités automatiquement",
    icon: "IconUpdate"
  },
  {
    title: "Sauvegarde automatique",
    description: "Vos données protégées et sauvegardées",
    icon: "IconBackup"
  }
]
</script>