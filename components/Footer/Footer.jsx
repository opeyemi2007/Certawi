'use client'

import React, { useState } from "react";
import Link from 'next/link';
import logo from "./assets/icon.png";
import styles from "./footer.module.scss";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import Image from 'next/image'

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regex.test(email)) {
      setEmail("");
      setMessage("");
    } else if (!regex.test(email) && email !== "") {
      setMessage("Please enter a valid email");
    } else {
      return;
    }
  };
  return (
    <div id={styles.footerId} className="footer">
      <div className={styles['footer-container']}>
        <div className={styles['footer-flex']}>
          <div className={styles['footer-lists']}>
            <div className={styles.list}>
              <h2>company</h2>
              <Link href='#' className={styles.link}>About</Link>
              <Link href='#' className={styles.link}>Contact</Link>
              <Link href='#' className={styles.link}>Our team</Link>
            </div>
            <div className={styles.list}>
              <h2>product</h2>
              <Link href='#' className={styles.link}>How it works</Link>
              <Link href='#' className={styles.link}>Pricing</Link>
              <Link href='#' className={styles.link}>Terms of Service</Link>
              <Link href='#' className={styles.link}>Privacy Policy</Link>
            </div> 
            <div className={styles.list}>
              <h2>r esources</h2>
              <Link href='#' className={styles.link}>Blog</Link>
              <Link href='#' className={styles.link}>Help</Link>
              <Link href='#' className={styles.link}>FAQs</Link>
            </div>
          </div>
          <div className={styles['footer-form']}>
            <h3>Stay up to date with Product</h3>
            <form noValidate>
              <p className={styles['error-msg']}>{message}</p>
              <div className={styles['footer-input']}>
                <input
                  type="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  value={email}
                  name="name"
                  onClick={() => setMessage("")}
                />
                <button onClick={handleSubmit}>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles['footer-info']}>
          <div className={styles['footer-logo']}>
            <h2>
              Certawi <Image src={logo} width={200} height={200} alt="certawi logo" />
            </h2>
            <h3>info@certawi.com</h3>
          </div>
          <div className={styles['footer-socials']}>
            <h3>We are social</h3>
            <div>
              <BsInstagram className={styles.social} />
              <BsLinkedin className={styles.social}/>
              <BsTwitter className={styles.social} />
              <BsGithub className={styles.social} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles['footer-copyright']} ${styles['footer-container']}`}>
        <h3>
          &copy; Copyright {year}{" "}
          <span className={styles['headlight-text']}>Team Headlight</span>. All rights
          reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
