export const CONTENT = {
  siteTitle: 'LocalGenie',
  hero: {
    title: 'Your Local Services, AI-Powered Magic',
    subtitle: 'Connect with trusted local professionals instantly. Book, chat, and get help — all powered by AI.'
  },
  features: [
    {key: 'ai_chatbot', title: 'AI Chatbot Assistant', description: 'Instant help and recommendations.'},
    {key: 'instant_booking', title: 'Instant Booking', description: 'Book services in seconds.'},
    {key: 'verified', title: 'Verified Professionals', description: 'Background-checked pros.'},
    {key: 'chat', title: 'Real-time Chat', description: 'Communicate directly with providers.'},
    {key: 'secure_payments', title: 'Secure Payments', description: 'Safe and quick transactions.'},
    {key: 'nearby', title: 'Nearby Services', description: 'Find pros close to you.'}
  ],
  services: [
    {key: 'plumbing', title: 'Plumbing', price: 'Starting at $50'},
    {key: 'electrical', title: 'Electrical', price: 'Starting at $60'},
    {key: 'carpentry', title: 'Carpentry', price: 'Starting at $45'},
    {key: 'cleaning', title: 'Cleaning', price: 'Starting at $30'},
    {key: 'moving', title: 'Moving', price: 'Starting at $80'},
    {key: 'painting', title: 'Painting', price: 'Starting at $55'},
    {key: 'ac_repair', title: 'AC Repair', price: 'Starting at $70'},
    {key: 'appliance_repair', title: 'Appliance Repair', price: 'Starting at $65'}
  ]
  ,
  chatbot: {
    messages: [
      { sender: 'ai', text: 'Hi! I\'m Genie — your local assistant. How can I help today?', delay: 600 },
      { sender: 'user', text: 'I need a plumber for a leaking sink.', delay: 1600 },
      { sender: 'ai', text: 'Got it. I found 3 top-rated plumbers near you. Would you like to see their profiles or book instantly?', delay: 2600 },
      { sender: 'user', text: 'Show profiles, please.', delay: 3800 },
      { sender: 'ai', text: 'Here are the recommended professionals — you can chat, view ratings, or book directly.', delay: 4800 }
    ]
  }
  ,
  testimonials: [
    { userPhoto: '', rating: 5, quote: 'LocalGenie connected me with a fantastic electrician within minutes. Highly recommend!', userName: 'Priya K.', serviceUsed: 'Electrical' },
    { userPhoto: '', rating: 5, quote: 'Booked a plumber for an emergency — fast and professional.', userName: 'Rahul S.', serviceUsed: 'Plumbing' },
    { userPhoto: '', rating: 4, quote: 'Great service for home painting. Clean and on time.', userName: 'Anita M.', serviceUsed: 'Painting' },
    { userPhoto: '', rating: 5, quote: 'The AI assistant found the perfect mover for my apartment move.', userName: 'Jason L.', serviceUsed: 'Moving' },
    { userPhoto: '', rating: 5, quote: 'Reliable carpentry work, reasonable price.', userName: 'Meera P.', serviceUsed: 'Carpentry' },
    { userPhoto: '', rating: 4, quote: 'AC repair was quick and the technician was friendly.', userName: 'Carlos R.', serviceUsed: 'AC Repair' }
  ]
  ,
  stats: [
    { key: 'active_users', label: 'Active Users', endValue: 15000, suffix: '+' },
    { key: 'verified_providers', label: 'Verified Providers', endValue: 500, suffix: '+' },
    { key: 'jobs_completed', label: 'Jobs Completed', endValue: 50000, suffix: '+' },
    { key: 'cities', label: 'Cities Covered', endValue: 25, suffix: '' }
  ]
}
