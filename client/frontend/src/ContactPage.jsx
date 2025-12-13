import styles from './ContactPage.module.css'
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';

const ContactPage = () => {
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'support@tradeflow.com',
    subtext: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    subtext: 'Mon-Fri, 9am-6pm EST',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: '123 Trade Street',
    subtext: 'Business City, BC 12345',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: '9:00 AM - 6:00 PM',
    subtext: 'Monday - Friday',
  },
];
  return (
    <div className={styles.container}>
        <section className={styles.section1}>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.motion1}
          >
            <span className={styles.motion1p1}>Contact Us</span>
            <h1>
              Get in Touch
            </h1>
            <p className={styles.motion1p2}>
              Have questions about our platform? We're here to help. Reach out and our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className={styles.section2}>
        <div>
            <div className={styles.container2}>
                <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.motion2}
            >
              <div className={styles.motion2div1}>
                <div className={styles.m1}>
                  <MessageSquare className={styles.message} />
                </div>
                <div className={styles.m2}>
                  <h2>Send us a message</h2>
                  <p>We'd love to hear from you</p>
                </div>
              </div>

              <form>
                <div className={styles.label}>
                  <div >
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                    className={styles.input}
                  />
                </div>

                <div>
                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={6}
                    className={styles.input2}
                  />
                </div>

                <button>
                      Send Message
                      <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.motion3}
            >
                <div className={styles.featuresDiv}>
                    {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={styles.featureDiv}
                  >
                    <div className={styles.iconDiv}>
                      <info.icon/>
                    </div>
                    <h3>{info.title}</h3>
                    <p>{info.details}</p>
                    <p>{info.subtext}</p>
                  </motion.div>
                ))}
                </div>

                <div className={styles.map}>
                <img
                  src="/map.png"
                  alt="Location map"
                />
                <div className={styles.absolute}>
                  <div className={styles.card}>
                    <MapPin className={styles.mappin} />
                    <p className="font-medium text-foreground">123 Trade Street</p>
                    <p className={styles.p2}>Business City, BC 12345</p>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
        </div>
      </section>

      <section className={styles.section3}>
        <div className={styles.divlast}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.last}
          >
            <h2>
              Looking for quick answers?
            </h2>
            <p>
              Check out our comprehensive FAQ section for instant answers to common questions about our platform.
            </p>
            <button>
              View FAQ
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default ContactPage