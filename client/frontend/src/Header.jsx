import React from 'react'
import styles from './Header.module.css'
import {
  LayoutDashboard,
  Package,
  FileText,
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Ship,
  TrendingUp,
  Users,
  HelpCircle,
} from 'lucide-react';

const Header = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.Container1}>
            <Ship className={styles.shipIcon}/>
            <h2>TradeFlow</h2>
        </div>
        <div className={styles.Container2}>
            <a>Home</a>
            <a>About</a>
            <a>Blogs</a>
            <a>Contacts</a>
        </div>
        <div className={styles.Container3}>
            <button className={styles.button1}><a>login</a></button>
            <button className={styles.button2}>Get Started</button>
        </div>
    </div>
  )
}

export default Header