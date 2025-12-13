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
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.Container1}>
            <Ship className={styles.shipIcon}/>
            <h2>TradeFlow</h2>
        </div>
        <div className={styles.Container2}>
            <Link to={'/'}>Home</Link>
            <Link to={'about/'}>About</Link>
            <Link>Blogs</Link>
            <Link to={'contact/'}>Contacts</Link>
        </div>
        <div className={styles.Container3}>
            <button className={styles.button1}>
              <Link to={'auth/user/login/'}>
              login
              </Link>
            </button>
            <button className={styles.button2}>
              <Link to={'auth/user/login/'}>
              Get Started
              </Link>
            </button>
        </div>
    </div>
  )
}

export default Header