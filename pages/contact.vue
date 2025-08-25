<template>
  <div>
    <!-- Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-blue-100">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Transformons ensemble vos projets immobiliers
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Notre équipe d'experts vous accompagne pour choisir la solution 
          MODELI adaptée à vos besoins. Devis gratuit sous 24h.
        </p>
      </div>
    </section>

    <!-- Contact Form -->
    <ContactForm />

    <!-- Contact Info -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Autres moyens de nous contacter
          </h2>
          <p class="text-xl text-gray-600">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p class="text-gray-600 mb-4">Réponse sous 2h en moyenne</p>
            <a href="mailto:contact@modeli.ci" class="text-primary-600 hover:text-primary-700 font-medium">
              contact@modeli.ci
            </a>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Téléphone</h3>
            <p class="text-gray-600 mb-4">Du lundi au vendredi, 9h-18h</p>
            <a href="tel:+33123456789" class="text-primary-600 hover:text-primary-700 font-medium">
              01 23 45 67 89
            </a>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Chat</h3>
            <p class="text-gray-600 mb-4">Réponse immédiate</p>
            <button class="text-primary-600 hover:text-primary-700 font-medium">
              Démarrer le chat
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact - MODELI',
  description: 'Contactez notre équipe d\'experts pour un devis gratuit. Email, téléphone ou chat - nous répondons sous 24h.',
})
</script>