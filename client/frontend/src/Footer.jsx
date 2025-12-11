import { Link } from "react-router-dom";
import {
  Ship,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "#" },
      { name: "Press", path: "#" },
      { name: "Blog", path: "/blog" },
    ],
    services: [
      { name: "Import Services", path: "#" },
      { name: "Export Services", path: "#" },
      { name: "Carrier Network", path: "#" },
      { name: "Tracking", path: "#" },
    ],
    support: [
      { name: "Help Center", path: "/contact" },
      { name: "Contact Us", path: "/contact" },
      { name: "FAQ", path: "#" },
      { name: "Documentation", path: "#" },
    ],
    legal: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Cookie Policy", path: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.footerSection1}>
          <div className={styles.footerSection11}>
            <div className={styles.logo}>
              <div>
                <Ship className={styles.ship2} />
              </div>
              <p>TradeFlow</p>
            </div>
            <p className={styles.desc}>
              Simplifying global trade with smart import-export management
              solutions. Connect, track, and grow your business worldwide.
            </p>
            <div className={styles.iconsDiv}>
              <div className={styles.mail}>
                <Mail className={styles.mailicon} />
                <p>contact@tradeflow.com</p>
              </div>
              <div className={styles.phone}>
                <Phone className={styles.phoneIcon} />
                <p>+254 111 748774</p>
              </div>
              <div className={styles.mappin}>
                <MapPin className={styles.map} />
                <p>123 Trade Street, Business City</p>
              </div>
            </div>
          </div>
          <div className={styles.linksDiv}>
            <div className={styles.links}>
              <h1>Company</h1>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                    to={link.path}>
                    {link.name}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.links}>
              <h1>Services</h1>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                    to={link.path}>
                    {link.name}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.links}>
              <h1>Support</h1>
              <ul>
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                    to={link.path}>
                    {link.name}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.links}>
              <h1>Legal</h1>
              <ul>
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                    to={link.path}>
                    {link.name}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.lastDiv}>
            <p>© {new Date().getFullYear()} TradeFlow. All rights reserved.</p>
            <div>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={styles.sociallinks}
              >
                <social.icon className={styles.socialIcons} />
              </a>
              
            ))}
            </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
