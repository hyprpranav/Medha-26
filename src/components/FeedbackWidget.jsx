import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FeedbackWidget.css'

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Create mailto link
    const subject = encodeURIComponent('MEDHA\'26 - User Inquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:medha2026.mkce@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    setStatus('sent')
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setStatus('')
      setIsOpen(false)
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="feedback-float-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"/>
          <path d="M7 9H17V11H7V9ZM7 12H14V14H7V12ZM7 6H17V8H7V6Z" fill="currentColor"/>
        </svg>
      </motion.button>

      {/* Feedback Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="feedback-modal"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="feedback-header">
              <h3>Ask Us Anything</h3>
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            </div>
            
            <form onSubmit={handleSubmit} className="feedback-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending' || status === 'sent'}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending' || status === 'sent'}
              />
              <textarea
                name="message"
                placeholder="Ask your question about MEDHA'26..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                disabled={status === 'sending' || status === 'sent'}
              />
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={status === 'sending' || status === 'sent'}
              >
                {status === 'sending' ? 'Opening Email...' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
