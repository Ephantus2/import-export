import React from 'react'
import styles from './BlogsPage.module.css'
import { motion } from 'framer-motion'

const BlogsPage = () => {
  return (
    <div>
        <section>
            <div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.motion1}
          >
            <span>Blog</span>
            <h1>
              Insights & Updates
            </h1>
            <p>
              Stay informed with the latest trends, tips, and news in international trade and logistics.
            </p>

            <div>
              <input
                type="text"
                placeholder="Search articles..."
              />
            </div>
          </motion.div>
            </div>
        </section>
    </div>
  )
}

export default BlogsPage