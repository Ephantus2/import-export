import React from "react";
import styles from "./Registerpage.module.css";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Ship } from "lucide-react";

const Registerpage = () => {
    const roles = [
  { value: 'importer', label: 'Importer', description: 'Import goods into your country' },
  { value: 'exporter', label: 'Exporter', description: 'Export goods to other countries' },
  { value: 'carrier', label: 'Carrier', description: 'Provide shipping services' },
  { value: 'admin', label: 'Admin', description: 'Manage platform operations' },
];
  return (
    <div className={styles.container}>
      

      <div className={styles.div2}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
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

          <h1>Create your account</h1>
          <p>
            Already have an account?{" "}
            <Link to="/auth/user/login/" replace={true} className={styles.free}>
              Sign in
            </Link>
          </p>
          <form>
             <div>
              <p className="mb-3 block">Select your role</p>
              <div className={styles.roles}>
                {roles.map((role) => (
                  <button
                    key={role.value}
                    type="button"
                    className={styles.b}
                  >
                    <div className={styles.flex}>
                      <span>{role.label}</span>
                    </div>
                    <span>{role.description}</span>
                  </button>
                ))}
              </div>
            </div>
            <label for="email">Email</label>
            <input id="Email" placeholder="you@company.com" />
            <label className={styles.label2} for="password">
              <span>Password </span>
              <span className={styles.forgot}>forgot password?</span>
            </label>
            <input
              className={styles.password}
              type="password"
              placeholder="......"
            />
            <button className={styles.submit} type="submit">Sign In</button>
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

      <div className={styles.block}>
        <img src="/signup.png" alt="Container port" />
        <div className={styles.absolute2}>
          <div className={styles.texts}>
            <h2>Join the Global Trade Revolution</h2>
            <p>
              Connect with thousands of verified partners and streamline your
              import-export operations today.
            </p>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default Registerpage;
