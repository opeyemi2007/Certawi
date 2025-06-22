import React from "react";
import styles from './testimonials.module.scss'
import person_1 from '../../public/images/person-1.png'
import person_2 from '../../public/images/person-2.png'
import person_3 from '../../public/images/person-3.png'
import Image from 'next/image'

export default function Testimonials () {
    return (
        <>
          <p className={`${styles.sora} ${styles['testimonial-header']}`}>Testimonials</p>
          <p className={styles['testimonial-caption']}>What our users have to say about us</p>
          <div className={`${styles.flex} ${styles.testimonials} ${styles.center} ${styles['justify-between']} ${styles.gap} ${styles['testimonial-bottom']}`}>
            <div className={`${styles['testimonial-container']} ${styles['text-left']} ${styles.sora} ${styles.test}`}>
              <div className={`${styles.flex} ${styles['items-center']}`} style={{width: '343px'}}>
                <Image src={person_1} width={100} height={100} alt="user" />
                <div style={{paddingLeft: '20px'}}>
                    <p style={{fontWeight: '600'}}>Lindsay Favazza</p>
                    <p>United States</p>
                </div>
              </div>
              <p style={{paddingTop: "25px"}}>
                  “This is my first time utilizing Certawi.
                  It is simply brilliant. In a matter of seconds, a full certificate is generated”
              </p>
            </div>

            <div className={`${styles['testimonial-container']} ${styles['text-left']} ${styles.sora} ${styles.test}`}>
              <div className={`${styles.flex} ${styles['items-center']}`} style={{width: '343px'}}>
                <Image src={person_2} width={100} height={100} alt="user" />
                <div style={{paddingLeft: '20px'}}>
                    <p style={{fontWeight: '600'}}>Valerie Tan</p>
                    <p>Singapore</p>
                </div>
              </div>
              <p style={{paddingTop: "25px"}}>
                “The certawi certificate generator is a fantastic tool that helps me create certificates 
                quickly and with plenty of inspiration. Definitely, I would advise.”
              </p>
            </div>

            <div className={`${styles['testimonial-container']} ${styles['text-left']} ${styles.sora} ${styles.test}`}>
              <div className={`${styles.flex} ${styles['items-center']}`} style={{width: '343px'}}>
                <Image src={person_3} width={100} height={100} alt="user" />
                <div style={{paddingLeft: '20px'}}>
                    <p style={{fontWeight: '600'}}>Lea Botha</p>
                    <p>South Africa</p>
                </div>
              </div>
              <p style={{paddingTop: "25px"}}>
                “Probably the best platform for anyone needing to generate bulk certificates. 
                Amazing! I love how easy it is to use! Recommended for EVERYONE!”
              </p>
            </div>
          </div>
        </>
    )
}