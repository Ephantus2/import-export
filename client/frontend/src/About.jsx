import styles from './About.module.css'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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
            <p className={styles.motion1p1}>About TradeFlow</p>
            <h1>Revolutionizing Global Trade</h1>
            <p className={styles.motion1p2}>We're on a mission to make international trade accessible, efficient, and transparent for businesses of all sizes.</p>
          </motion.div>
            </div>
        </section>
    </div>
  )
}

export default About