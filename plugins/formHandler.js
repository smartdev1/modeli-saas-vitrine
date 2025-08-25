export default defineNuxtPlugin(() => {
  return {
    provide: {
      submitContactForm: async (formData) => {
        try {
          // Option 1: Send to Formspree or similar service
          const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          })
          
          if (!response.ok) {
            throw new Error('Failed to submit form')
          }
          
          return { success: true }
        } catch (error) {
          console.error('Form submission error:', error)
          
          // Option 2: Fallback to mailto link
          const mailtoLink = `mailto:contact@modeli.ci?subject=Demande de devis - ${formData.company}&body=Nom: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0ASociété: ${formData.company}%0ABudget: ${formData.budget}%0AMessage: ${formData.message}`
          
          window.open(mailtoLink, '_blank')
          
          return { success: true, fallback: true }
        }
      }
    }
  }
})