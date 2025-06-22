import React from "react";
import styles from './hero.module.scss'
import hero from '../../public/images/hero.png'
import tick from '../../public/images/tick.png'
import google from '../../public/images/google.png'
import udemy from '../../public/images/udemy.png'
import coursera from '../../public/images/coursera.png'
import skillshare from '../../public/images/skillshare.png'
import Image from 'next/image'

export default function Hero () {
    return (
        <>
          <div className={`${styles.flex} ${styles.center} ${styles['justify-between']} ${styles.hero}`}>
               <div className={styles['hero-left']}>
                  <p className={`${styles['hero-text']} ${styles.sora}`}>
                    Create and download
                    your <span className={styles.emphasized}>professional 
                    certificates</span> for 
                    <span className={styles.emphasized}> free</span>
                  </p>
                  <p className={`${styles['work-sans']} ${styles['line-height']} ${styles['hero-caption']}`}>Generate professionally designed certificates for your staff, students etc.</p>
                  <button className={styles['hero-button']}>Create a certificate now</button>
               </div>
               <Image src={hero} alt='hero' className={styles['hero-img']}/>
           </div>

           <div className={`${styles['line-height']} ${styles.flex} ${styles['justify-between']} ${styles.center} ${styles['text-left']} ${styles['work-sans']} ${styles.perks}`}>
               <div className={`${styles.flex} ${styles['items-center']}`} style={{width: "447px", gap: '10px'}}>
                  <Image src={tick} width={300} height={300} alt='tick' className={styles.tick}/>
                  <p>No design skill needed. Choose from a variety of stunning templates.</p>
               </div>
               <div className={`${styles.flex} ${styles['items-center']}`} style={{width: "325px", gap: '10px'}}>
                  <Image src={tick} width={300} height={300} alt='tick' className={styles.tick}/>
                  <p>Edit template to your preferred look and feel.</p>
               </div>
               <div className={`${styles.flex} ${styles['items-center']}`} style={{width: "294px", gap: '10px'}}>
                  <Image src={tick} width={300} height={300} alt='tick' className={styles.tick}/>
                  <p>Create and Send single and bulk certificate.</p>
               </div>
           </div>
           <p className={`${styles['partner-head']} ${styles.sora}`}>Trusted by  schools and institutions; big and small</p>
           <div className={styles.partners}>
              <Image src={google} alt="google"/>
              <Image src={udemy} alt="udemy" />
              <Image src={coursera} alt="cousera" />
              <Image src={skillshare} alt="skillshare" />
           </div>
        </>
    )
}