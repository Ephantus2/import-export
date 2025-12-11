import styles from './About.module.css'
import { Target, Users, Shield, Globe, CheckCircle } from 'lucide-react';

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const missions = [
  {
    icon: Target,
    title: 'Educate',
    description: 'Empowering businesses with knowledge about international trade regulations, best practices, and market opportunities.',
  },
  {
    icon: Users,
    title: 'Connect',
    description: 'Building bridges between importers, exporters, and carriers to create a seamless global trade network.',
  },
  {
    icon: Shield,
    title: 'Protect',
    description: 'Ensuring secure transactions, verified partners, and compliance with international trade laws.',
  },
  {
    icon: Globe,
    title: 'Ensure',
    description: 'Guaranteeing reliable shipment tracking, timely deliveries, and transparent operations.',
  },
];
const values = [
  'Transparency in all operations',
  'Customer-first approach',
  'Innovation and continuous improvement',
  'Global perspective, local understanding',
  'Sustainability and responsibility',
  'Excellence in service delivery',
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
            <p className={styles.motion1p1}>About TradeFlow</p>
            <h1>Revolutionizing Global Trade</h1>
            <p className={styles.motion1p2}>We're on a mission to make international trade accessible, efficient, and transparent for businesses of all sizes.</p>
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
                <h2>
                Our Story
              </h2>
              <div>
                <p>
                  Founded in 2020, TradeFlow emerged from a simple observation: international trade was unnecessarily complicated. Small and medium businesses struggled with fragmented systems, unclear regulations, and unreliable partners.
                </p>
                <p>
                  Our founders, with decades of combined experience in logistics and technology, set out to build a platform that would democratize global trade. Today, TradeFlow serves over 50,000 businesses across 150+ countries.
                </p>
                <p>
                  We believe that when trade flows smoothly, economies grow, businesses thrive, and communities prosper. That's why we're committed to building the most comprehensive and user-friendly trade management platform in the world.
                </p>
                </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.motion3}
            >
               <img
                src="/about1.png"
                alt="Team collaboration"
              />
              <div>
                <p className={styles.p150}>150+</p>
                <p className={styles.p151}>Countries Served</p>
              </div>
            </motion.div>
                </div>
            </div>
        </section>
        <section className={styles.section3}>
          <div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.motion4}
          >
            <p>Our Mission</p>
            <h1>Four Pillars of Excellence</h1>
          </motion.div>
          <div className={styles.motion5Div}>
            {missions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.motion5}
              >
                <div className={styles.missionIconDiv}>
                  <mission.icon className={styles.missionIcon} />
                </div>
                <h3>{mission.title}</h3>
                <p>{mission.description}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

        <section className={styles.section4}>
        <div>
          <div className={styles.motion6Div}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.motion6}
            >
              <img
                src="\about2.png"
                alt="Our values"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.motion7}
            >
              <p>Our Values</p>
              <h2>What Drives Us Forward
              </h2>
              <div className={styles.section4d}>
                {values.map((value) => (
                  <div key={value} className={styles.section4e}>
                    <CheckCircle className={styles.CheckCircle} />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About