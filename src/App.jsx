import React, { useEffect } from 'react'
import styles from './App.module.css'
import { theme } from './theme'
import { CONTENT } from './constants'
import { setupSmoothScroll } from './utils/animations'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import HowItWorks from './components/HowItWorks/HowItWorks'
import ServicesCarousel from './components/Services/ServicesCarousel'
import ChatbotShowcase from './components/Chatbot/ChatbotShowcase'
import Testimonials from './components/Testimonials/Testimonials'
import Stats from './components/Stats/Stats'
import DualCTA from './components/DualCTA/DualCTA'
import Footer from './components/Footer/Footer'

function App() {
  useEffect(() => {
    setupSmoothScroll()
  }, [])
  return (
    <div className={styles.app} style={{ background: theme.colors.lightGray }}>
      <Navbar transparent fixed />

      <main className={styles.main}>
        <Hero
          title={CONTENT.hero.title}
          subtitle={CONTENT.hero.subtitle}
          primaryCTA={{ text: 'Find Services' }}
          secondaryCTA={{ text: 'Become a Provider' }}
          trustBadges={["500+ Providers", "10k+ Happy Customers", "AI-Powered"]}
        />
        <Features />
        <HowItWorks />
        <ServicesCarousel />
        <ChatbotShowcase />
        <Testimonials />
        <Stats />
        <DualCTA
          leftSide={{
            title: 'Need a Service?',
            points: ['Quick booking', 'Verified professionals', 'Secure payments'],
            buttonText: 'Find Services',
            onClick: () => alert('Find Services')
          }}
          rightSide={{
            title: 'Become a Provider',
            points: ['Flexible hours', 'Fast payouts', 'Grow your business'],
            buttonText: 'Join Now',
            onClick: () => alert('Join Now')
          }}
        />
      </main>

      <Footer onNewsletterSubmit={(email) => console.log('Newsletter signup:', email)} />
    </div>
  )
}

export default App
