'use client'

import React, { useState } from "react";
import styles from './certificate.module.scss'
import demo from '../../public/images/demo.png'
import demo_2 from '../../public/images/demo-2.png'
import demo_3 from '../../public/images/demo-3.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Certificate() {
  const [bulkCertificate, setBulkCertificate] = useState(false);

  return (
    <>
      <p className={`${styles.sora} ${styles.header}`}>
        Create your <span className={styles.emphasized}>certificate </span>
        with <span className={styles.emphasized}>ease</span>
      </p>

      <p style={{ padding: '10px' }} className={styles.prompt}>Select a template, input values and Create a Certificate right away.</p>

      {bulkCertificate ?
        <div className={`${styles.flex} ${styles['justify-between']} ${styles.mode}`}>
          <button className={styles.select} style={{ color: '#222222', backgroundColor: '#ffffff' }} onClick={() => { setBulkCertificate(false) }}>Single Certificate</button>
          <button className={styles.select} onClick={() => { setBulkCertificate(true) }}>Bulk Certificate</button>
        </div>
        :
        <div className={`${styles.flex} ${styles['justify-between']} ${styles.mode}`}>
          <button className={styles.select} onClick={() => { setBulkCertificate(false) }}>Single Certificate</button>
          <button className={styles.select} style={{ color: '#222222', backgroundColor: '#ffffff' }} onClick={() => { setBulkCertificate(true) }}>Bulk Certificate</button>
        </div>
      }


      {bulkCertificate ?
        <div>

          <div className={`${styles.flex} ${styles.center} ${styles['justify-between']} ${styles['gap']} ${styles['cert-img']}`}>
            <Image
              src={demo}
              width={400}
              height={400}
              alt="certificate-1"
            />
            <Image
              src={demo_2}
              width={400}
              height={400}
              alt="certificate-2" />
            <Image
              src={demo_3}
              width={400}
              height={400}
              alt="certificate-3" />
          </div>

          <form action="" className={`${styles['cert-form']} ${styles['text-left']} ${styles['work-sans']}`}>
            <label htmlFor='img'>Logo</label>
            <input type="file" name="uploadfile" id="img" style={{ display: "none" }} />
            <label for="img" className={styles.upload}>Upload logo</label>
            <p style={{ fontSize: '12px' }}>Max image upload size: 8mb</p>

            <label for='text' className={styles.label}>Certificate Title</label>
            <input type="text" placeholder="Certificate of completion" />

            <label for='text' className={styles.label}>Dedication or message</label>
            <input type="text" placeholder="For your exceptional performance this month, 
            in appreciation for your loyalty and the desire to fulfil our goals, 
            in recognition of your leadership and dedication "/>

            <label for='text' className={styles.label}>Issued by</label>
            <input type="text" placeholder="Name of organisation or issuer" />

            <label for='date' className={styles.label}>Issue Date</label>
            <input type="date" />

            <input type="submit" value="Create Certificate" className="submit-btn" />
          </form>
        </div>
        :
        <div>

          <div className={`${styles.flex} ${styles.center} ${styles['justify-between']} ${styles.gap} ${styles['cert-img']}`}>
            <Image
              src={demo}
              width={400}
              height={400}
              alt="certificate-1"
            />
            <Image
              src={demo_2}
              width={400}
              height={400}
              alt="certificate-2" />
            <Image
              src={demo_3}
              width={400}
              height={400}
              alt="certificate-3" />
          </div>

          <form action="" className={`${styles['cert-form']} ${styles['text-left']} ${styles['work-sans']}`}>
            <label htmlFor='img'>Logo</label>
            <input type="file" name="uploadfile" id="img" style={{ display: "none" }} />
            <label htmlFor="img" className={styles.upload}>Upload logo</label>
            <p style={{ fontSize: '12px' }}>Max image upload size: 8mb</p>

            <label htmlFor='text' className={styles.label}>Certificate Title</label>
            <input type="text" placeholder="Certificate of completion" />

            <label htmlFor='text' className={styles.label}>Awardee Names</label>
            <input type="text" placeholder="Gabriel Prosper" />

            <label htmlFor='text' className={styles.label}>Dedication or message</label>
            <input type="text" placeholder="For your exceptional performance this month, 
            in appreciation for your loyalty and the desire to fulfil our goals, 
            in recognition of your leadership and dedication "/>

            <label htmlFor='text' className={styles.label}>Issued by</label>
            <input type="text" placeholder="Name of organisation or issuer" />

            <label htmlFor='date' className={styles.label}>Issue Date</label>
            <input type="date" />

            <Link href={'single_preview'}>
              <input type="submit" value="Create Certificate" className={styles['submit-btn']} />

            </Link>
          </form>
        </div>}
    </>
  )
}