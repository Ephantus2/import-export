import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Ship } from 'lucide-react';
import styles from './Loginpage.module.css'

const Loginpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <img
          src="/login.png"
          alt="Container port"
        />
        <div className={styles.absolute2}>
          <div className={styles.texts}>
            <h2>
              Welcome Back to TradeFlow
            </h2>
            <p>
              Continue managing your global trade operations with ease and efficiency.
            </p>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.div2}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.motion}
        >
          <Link to="/" className={styles.home}>
            <div>
              <Ship className={styles.ship} />
            </div>
            <span>TradeFlow</span>
          </Link>

          <h1>
            Sign in to your account
          </h1>
          <p>
            Don't have an account?{' '}
            <Link to="/auth/user/signup/" replace={true} className={styles.free}>
              Sign up for free
            </Link>
          </p>
          <form>
            <label for="email">Email</label>
            <input className={styles.input} id='Email' placeholder='you@company.com' />
            <label className={styles.label2} for="password"><span>Password </span><span className={styles.forgot}>forgot password?</span></label>
            <input className={styles.password} type='password' placeholder='......' />
            <button className={styles.submit} type='submit'>Sign In</button>
          </form>
          <div>
            <div className={styles.border1}>
              <div className={styles.border}></div>
              <p>or continue with</p>
            </div>
            <div className={styles.buttonDiv}>
              <button>Google</button>
              <button>Email</button>
            </div>
          </div>
          </motion.div>
      </div>
    </div>
  )
}

export default Loginpage
