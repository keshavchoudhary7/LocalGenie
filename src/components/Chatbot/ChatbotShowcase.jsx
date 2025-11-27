import React from 'react'
import styles from './Chatbot.module.css'
import ChatMockup from './ChatMockup'
import { CONTENT } from '../../constants'

const ChatbotShowcase = () => {
  return (
    <section className={styles.section} id="chatbot">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h2>Meet Your AI Assistant</h2>
            <ul className={styles.features}>
              <li>Instant recommendations</li>
              <li>Book or chat with pros</li>
              <li>24/7 support</li>
            </ul>
            <button className={styles.cta}>Try It Now</button>
          </div>

          <div className={styles.right}>
            <ChatMockup messages={CONTENT.chatbot.messages} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatbotShowcase
