import React, { useState, useMemo} from 'react'
import styles from './BlogsPage.module.css'
import { motion } from 'framer-motion'

function search2(blogs, search){
  const filtered = blogs.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()))
  return filtered
}

const BlogsPage = () => {
  const [search, setSearch] = useState('')

  
  const blogPosts =[
    {
      name: 'mary',
      date: Date.now(),
      likes: 10
    },
    {
      name: 'John',
      date: Date.now(),
      likes: 30
    },
    {
      name: 'Victor',
      date: Date.now(),
      likes: 30
    },
    {
      name: 'Mercy',
      date: Date.now(),
      likes: 30
    }
  ]
  
  let filtered = useMemo(() => {
    search2(blogPosts, search)
  }, [search])


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
                value={search}
                placeholder="Search articles..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </motion.div>
            </div>
            <div>
              {filtered && filtered.map((post, index) => (
                <div key={index}> 
                <p>{post.name}</p>
                <p>{post.date}</p>
                <p>{post.likes}</p>
                </div>
              ))}
            </div>
        </section>
    </div>
  )
}

export default BlogsPage