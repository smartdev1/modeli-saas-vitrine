<template>
  <section class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Choisissez le plan adapté à vos projets
        </h2>
        <p class="text-xl text-gray-600">
          Tarifs transparents, sans engagement, avec essai gratuit de 14 jours
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div v-for="(plan, index) in plans" :key="plan.name" 
             :class="[
               'bg-white rounded-2xl shadow-lg p-8 relative',
               plan.popular ? 'border-2 border-primary-500 lg:scale-105' : 'border border-gray-200'
             ]">
          
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium">
              Le plus populaire
            </span>
          </div>

          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
            <div class="mb-4">
              <span class="text-4xl font-bold text-gray-900">{{ plan.price }}</span>
              <span class="text-gray-600">/mois</span>
            </div>
            <p class="text-gray-600">{{ plan.description }}</p>
          </div>

          <ul class="space-y-4 mb-8">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-success-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>

          <button 
            :class="[
              'w-full py-3 px-6 rounded-lg font-medium transition-colors',
              plan.popular 
                ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            ]"
          >
            {{ plan.cta }}
          </button>

          <p class="text-sm text-gray-500 text-center mt-4">
            {{ plan.note }}
          </p>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="max-w-4xl mx-auto mt-24">
        <h3 class="text-2xl font-bold text-gray-900 text-center mb-12">
          Questions fréquentes
        </h3>
        <div class="space-y-6">
          <div v-for="faq in faqs" :key="faq.question" class="bg-white rounded-lg shadow-md p-6">
            <h4 class="font-semibold text-gray-900 mb-3">{{ faq.question }}</h4>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    name: "Basic",
    price: "150.000 FCFA",
    description: "Parfait pour débuter avec la modélisation financière",
    features: [
      "3 projets maximum",
      "Calculs VAN, TRI, ROI",
      "Rapports PDF",
      "Support par email",
      "Historique 6 mois"
    ],
    cta: "Commencer l'essai gratuit",
    note: "14 jours d'essai gratuit",
    popular: false
  },
  {
    name: "Pro",
    price: "250.000 FCFA",
    description: "Pour les professionnels actifs",
    features: [
      "Projets illimités",
      "Scénarios multiples",
      "Rapports avancés Excel/PDF",
      "5 utilisateurs inclus",
      "Historique illimité",
      "Support prioritaire",
      "API access"
    ],
    cta: "Commencer l'essai gratuit",
    note: "14 jours d'essai gratuit",
    popular: true
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    description: "Solution personnalisée pour les grandes structures",
    features: [
      "Tout du plan Pro",
      "Utilisateurs illimités",
      "Formation dédiée",
      "Support téléphonique",
      "Intégrations sur mesure",
      "Serveur dédié (option)"
    ],
    cta: "Demander un devis",
    note: "Contactez-nous pour un devis personnalisé",
    popular: false
  }
]

const faqs = [
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre compte. Les changements sont effectifs immédiatement."
  },
  {
    question: "L'essai gratuit nécessite-t-il une carte bancaire ?",
    answer: "Non, vous pouvez tester MODELI pendant 14 jours sans fournir vos informations de paiement."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Absolument. Nous utilisons un chiffrement de niveau bancaire et nos serveurs sont hébergés en France avec certification ISO 27001."
  },
  {
    question: "Proposez-vous une formation ?",
    answer: "Oui, une formation est incluse avec tous nos plans. Les plans Entreprise bénéficient en plus d'une formation sur mesure."
  }
]
</script>