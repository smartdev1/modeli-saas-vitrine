<template>
  <section class="section-padding bg-primary-50">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prêt à optimiser vos investissements ?
          </h2>
          <p class="text-xl text-gray-600">
            Demandez votre devis personnalisé et découvrez comment MODELI peut transformer votre activité
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl p-8">
          <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                v-model="form.firstName"
                type="text"
                id="firstName"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                v-model="form.lastName"
                type="text"
                id="lastName"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email professionnel *
              </label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                v-model="form.phone"
                type="tel"
                id="phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                Société *
              </label>
              <input
                v-model="form.company"
                type="text"
                id="company"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            <div>
              <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
                Budget mensuel estimé
              </label>
              <select
                v-model="form.budget"
                id="budget"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="">Sélectionner</option>
                <option value="0-100">0€ - 100€</option>
                <option value="100-300">100€ - 300€</option>
                <option value="300-500">300€ - 500€</option>
                <option value="500+">500€+</option>
                <option value="custom">Budget sur mesure</option>
              </select>
            </div>

            <div class="md:col-span-2">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Décrivez vos besoins *
              </label>
              <textarea
                v-model="form.message"
                id="message"
                rows="4"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Parlez-nous de vos projets, du nombre d'utilisateurs, de vos besoins spécifiques..."
              ></textarea>
            </div>

            <div class="md:col-span-2">
              <label class="flex items-start space-x-3">
                <input
                  v-model="form.newsletter"
                  type="checkbox"
                  class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1"
                />
                <span class="text-sm text-gray-600">
                  J'accepte de recevoir des informations sur les nouveautés MODELI et des conseils en investissement immobilier
                </span>
              </label>
            </div>

            <div class="md:col-span-2">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Demander mon devis gratuit</span>
                <span v-else>Envoi en cours...</span>
              </button>
              <p class="text-sm text-gray-500 text-center mt-4">
                ✓ Réponse sous 24h • ✓ Devis gratuit et sans engagement
              </p>
            </div>
          </form>

          <!-- Success Message -->
          <div v-if="submitted" class="mt-8 p-6 bg-success-50 border border-success-200 rounded-lg text-center">
            <div class="w-12 h-12 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-success-800 mb-2">Demande envoyée avec succès !</h3>
            <p class="text-success-600">Notre équipe vous contactera sous 24h pour établir votre devis personnalisé.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  budget: '',
  message: '',
  newsletter: false
})

const isSubmitting = ref(false)
const submitted = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', form.value)
    
    submitted.value = true
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      budget: '',
      message: '',
      newsletter: false
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>