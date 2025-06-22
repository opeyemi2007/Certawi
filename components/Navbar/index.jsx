'use client'
import styles from "./navbar.module.scss";
import React, { useRef } from "react";
import logo from "./assets/icon.png";
import { FaBars } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image'

function Navbar() {
  const navRef = useRef();
  const handleToggle = () => {
    console.log(navRef.current);
    navRef.current.classList.toggle("show-links");
  };

  const links = [
    {
      id: 1,
      url: "/",
      text: "home",
    },
    {
      id: 2,
      url: "/Templates",
      text: "browse templates",
    },
    {
      id: 3,
      url: "/Pricing",
      text: "pricing",
    },
    {
      id: 4,
      url: "/Error",
      text: "blog",
    },
    {
      id: 5,
      url: "/FAQ",
      text: "FAQs",
    },
  ];

  return (
    <div id={styles.Nav}> 
    <div className={styles.navbar}>
      <div className={styles['nav-header-container']}>
        <div className={`${styles['nav-header']} ${styles['container']}`}>
          <Link href='/' className={styles['nav-logo']}>
            <h2>
              Cert<span>awi</span>
            </h2>
            <Image src={logo} alt="certawi bulb" />
          </Link>
          <div className={styles['nav-click']}>
            <button className={styles.btn}>get started</button>
            <FaBars className={styles.bars} onClick={handleToggle} />
          </div>
        </div>
      </div>
      <div className={styles['nav-links']}>
        <div className={`${styles['links-container']} ${styles['container']}`} ref={navRef}>
          <div className={styles.links}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <p key={id}>
                  <Link href={url} className={styles.link}>
                    {text}
                  </Link>
                </p>
              );
            })}
          </div>
          <div className={styles['button-container']}>
            <button className={styles.btn}>get started</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
