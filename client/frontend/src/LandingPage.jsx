import React from 'react'
import styles from './LandingPage.module.css'
import { motion } from 'framer-motion';
import { 
    Ship,
  Globe,
  Shield,
  TrendingUp,
  Package,
  CreditCard,
  MapPin,
  MessageSquare,
  ArrowRight,
  CheckCircle,
 } from 'lucide-react'

const LandingPage = () => {
  const features = [
  {
    icon: <Globe />,
    title: 'Global Network',
    description: 'Connect with verified importers, exporters, and carriers across 150+ countries.',
  },
  {
    icon: <MapPin />,
    title: 'Real-time Tracking',
    description: 'Monitor your shipments 24/7 with live GPS tracking and instant notifications.',
  },
  {
    icon: <Shield />,
    title: 'Secure Transactions',
    description: 'Protected payments and verified partners ensure your trade is always safe.',
  },
  {
    icon: <CreditCard />,
    title: 'Smart Payments',
    description: 'Multiple payment options with competitive rates and transparent fees.',
  },
  {
    icon: <MessageSquare />,
    title: 'Seamless Communication',
    description: 'Built-in messaging and documentation sharing for smooth operations.',
  },
  {
    icon: <TrendingUp />,
    title: 'Analytics Dashboard',
    description: 'Powerful insights and reports to optimize your trade operations.',
  },
];

  const stats = [
  { value: '150+', label: 'Countries' },
  { value: '50K+', label: 'Active Users' },
  { value: '$2B+', label: 'Trade Volume' },
  { value: '99.9%', label: 'Uptime' },
]
  return (
    <div className={styles.container}>
        
        <section className={styles.section1}>
           
            <div className={styles.div11}>
              <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.div1}>
                <Ship className={styles.ship}/>
                <p>Trusted by 50,000+ businesses worldwide</p>
              </div>
              <div>
                <h1>
               Simplify Your Imports/Exports
                </h1>
              </div>
              <div>
                <p className={styles.p}>
                  The all-in-one platform for managing imports, exports, and logistics. Connect with verified partners, track shipments, and grow your business globally.
                </p>
              </div>
              <div className={styles.buttonDiv}>
                <button className={styles.button1}>Start free Trial <ArrowRight /></button>
                <button className={styles.button2}>
                  Learn More
                </button>
              </div>
              <div className={styles.checkDiv}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <CheckCircle key={i} className={styles.CheckCircle} />
                ))}
                <span className={styles.CheckCircleSpan}>Rated 4.9/5 from 2,000+ reviews</span>
              </div>
              </motion.div>
            </div>
            
            <div className={styles.div22}>
              <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src='port.png'/>
              
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-elevated border border-border/50"
                >
              <div className={styles.relative}>
                <div className={styles.packageDiv}>
                  <Package className={styles.package}/>
                </div>
                <div>
                  <p>Shipment delivered</p>
                  <p className={styles.location}>Los Angeles, USA</p>
                </div>
              </div>
              </motion.div>
              </motion.div>
            </div>
        </section>
        <section className={styles.section2}>
          {
            stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.stat2}
              >
                 <h1>{stat.value}</h1>
                 <p>{stat.label}</p>
                </motion.div>
              
            ))
          }

        </section>
        <section className={styles.section3}>
          <div className={styles.section3Div1}>
            <p className={styles.p1}>Features</p>
            <h1>Everything You Need for Global Trade</h1>
            <p className={styles.p2}>Powerful tools and features designed to streamline your import-export operations from start to finish.</p>
          </div>
          <div className={styles.featuresDiv}>
            {
            features.map((feature, i)=>(
               <div className={styles.featureDiv} key={i}>
                <div className={styles.iconDiv}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
               </div>
            )
            )
            }
          </div>
        </section>
        <section className={styles.section4}>
          <p className={styles.p11}>How It works</p>
          <h1>Get Started In Minutes</h1>
            <div className={styles.section41}>
            {[
              { step: '01', title: 'Create Account', description: 'Sign up and choose your role as importer, exporter, or carrier.' },
              { step: '02', title: 'Connect Partners', description: 'Find and connect with verified trade partners globally.' },
              { step: '03', title: 'Start Trading', description: 'Manage shipments, track orders, and grow your business.' },
            ].map((item, index) => (
              <div
                key={item.step}
                className={styles.section42}
              >
                <div className={styles.section421}>
                  <span className={styles.step}>{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p className={styles.p12}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

    </div>
  )
}

export default LandingPage