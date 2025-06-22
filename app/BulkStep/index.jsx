import React from "react";
import styles from './BulkStep.module.scss'
import example from '../../public/images/example.png'
import one from '../../public/images/step-one.png'
import two from '../../public/images/step-two.png'
import three from '../../public/images/step-three.png'
import Image from 'next/image'

export default function BulkStep() {
  return (
    <div className={styles.bulk}>
      <p className={`${styles.heading} ${styles.sora}`}>Create bulk Certificates in <span className={styles.emphasized}>3 easy steps</span></p>
      <div className={`${styles.flex} ${styles.space} ${styles.center} ${styles['items-center']} ${styles.wrap}`}>
        <Image
          src={example}
          width={500}
          height={600}
          alt="bulk example"
          className={styles.example}
        />
        <div className={`${styles['text-left']} ${styles['work-sans']}`}>
          <div className={styles.process}>
            <Image
              src={one}
              alt="one"
              width={80}
              height={80}
            />
            <p className={styles.steps}>Select certificate template</p>
          </div>
          <div className={styles.process}>
            <Image
              src={two}
              width={80}
              height={80}
              alt="two"
            />
            <p className={styles.steps}>Upload a CSV file</p>
          </div>
          <div className={styles.process}>
            <Image
              src={three}
              width={80}
              height={80}
              alt="three"
            />
            <p className={styles.steps}>Generate bulk certificates</p>
          </div>
        </div>
      </div>
      <button className={`${styles['bulk-button']} ${styles['work-sans']}`}>Create Bulk Certificates</button>
    </div>
  )
}