'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./aboutUs.module.scss";

import IMG1 from '../../public/IMG1.png'

import Value1 from '../../public/value1.png'
import Value2 from '../../public/value2.png'
import Value3 from '../../public/value3.png'

import Service1 from '../../public/service1.png'
import Service2 from '../../public/service2.png'
import Service3 from '../../public/service3.png'
import Service4 from '../../public/service4.png'

import Gallery1 from '../../public/gallery1.png'
import Gallery2 from '../../public/gallery2.png'
import Gallery3 from '../../public/gallery3.png'
import Gallery4 from '../../public/gallery4.png'
import Gallery5 from '../../public/gallery5.png'
import Gallery6 from '../../public/gallery6.png'

const Page = ({children}) => {
  return (
    <div id={styles.aboutUs} className={styles.about}>     
      <div className={styles.aboutHero}>
        <div className={styles.aboutHeroL}>
          <h1>We are a team of Creators and Innovators </h1>
          <h4>Certawi helps you generate certificates of different shapes and colors, you can also customize your own certificate with certawi</h4>
          <Link href="#" className={styles.btn}>Learn More</Link>
        </div>
        <div className={styles.aboutHeroR}>
          <Image src={IMG1} alt="Hero Image"/>
        </div>
      </div>

      <div className={styles.aboutAbout}>
        <div className={styles.aboutAboutImg}>
          <Image src={Gallery2} alt="Gallery Image" />
        </div>
        <div className={styles.aboutAboutD}>
          <h3>About Certawi</h3>
          <h4>Certawi is a full-featured online platform aimed at generating digital credentials and certificates for schools, businesses and organizations. We offer a complete and easy to use certificate management system. Certawi provides high quality templates with great designs as well as variety of customization options. Generate stunning certificates for your students, employees or colleagues with our online tool, today.</h4>
          <Link href="#" className={styles.btn}>Learn More</Link>
        </div>
      </div>
      
      <div className={styles.aboutValue}>
        <h2>Testimonial</h2>
        <h4 id="vh4">What our customers have to say about us</h4>
        <div className={styles.aboutValueS}>
          <div className={styles.aboutValueCard}>
            <h4 id={styles.v1h4}>“I needed it for a bulk generation of my student’s certificate, and it worked quite well. It is easy to use and I was able to create certificate for my students within minutes”.</h4>
            <div className={styles.aboutValueCardD}>
              <Image src={Value1} alt="Ajayi Lawal"/>
              <div className={styles.aboutValueCardT}>
                <h4 id={styles.v2h4}>Ajayi Lawal</h4>
                <h6>Lecturer</h6>
              </div>
            </div>
          </div>
          <div className={styles.aboutValueCard}>
            <h4 id={styles.v1h4}>“On opening the website there are different aesthetically pleasing templates made available where I get to choose the one that works for me. This gives me full control so I can easily change certificate content. I recommed for anyone”.</h4>
            <div className={styles.aboutValueCardD}>
              <Image src={Value2} alt="Lucy Lewi"/>
              <div className={styles.aboutValueCardT}>
                <h4 id={styles.v2h4}>Lucy Lewi</h4>
                <h6>Design mentor</h6>
              </div>
            </div>
          </div>
          <div className={styles.aboutValueCard}>
            <h4 id={styles.v1h4}>“Passion is the foundation of our business. It gives us the momentum to keep going even when times gets hard to build our company even higher when times are good”.</h4>
            <div className={styles.aboutValueCardD}>
              <Image src={Value3} alt="Ryan Levi"/>
              <div className={styles.aboutValueCardT}>
                <h4 id={styles.v2h4}>Ryan Levi</h4>
                <h6>Company Manager</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutService}>
        <h3>Our Services</h3>
        <hr className={styles.aboutstroke} />
        <div className={styles.aboutServiceS}>
          <div className={styles.aboutServiceCard}>
            <Image src={Service1} alt="Preview"/>
            <div className={styles.aboutServiceCardT}>
              <h4>Preview</h4>
              <h5>We provide you with access to preview your certificate before downloading</h5>
            </div>
          </div>
          <div className={styles.aboutServiceCard}>
            <Image src={Service2} alt="Customize Options"/>
            <div className={styles.aboutServiceCardT}>
              <h4>Customize Options</h4>
              <h5>If your certificate needs to be branded, we provide a variety of fonts and colors of your choice</h5>
            </div>
          </div>
          <div className={styles.aboutServiceCard}>
            <Image src={Service3} alt="Bulk generation"/>
            <div className={styles.aboutServiceCardT}>
              <h4>Bulk generation</h4>
              <h5>We provide you access to generate over hundred certificates at a go just by entering the file name containing the CSV file</h5>
            </div>
          </div>
          <div className={styles.aboutServiceCard}>
            <Image src={Service4} alt="Instant Free Download"/>
            <div className={styles.aboutServiceCardT}>
              <h4>Instant Free Download</h4>
              <h5>We offer a free way to quickly create and download wherever you are.</h5>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.mission} className={styles.aboutAbout}>
        <div className={styles.aboutAboutD}>
          <h3>Mission</h3>
          <h4>We strive to offer customers a quick and user friendly digital certificate generation process. Our aim is to provide a single trustworthy and efficient online certificate maker tool. Our team of highly trained professionals is ready to help you represent your achievements with beautiful certificate.</h4>
          <Link href="#" className={styles.btn}>Learn More</Link>
        </div>
        <div className={styles.aboutAboutImg}>
          <Image src={Gallery3} alt="Mission image" />
        </div>
      </div>

      <div className={styles.aboutGallery}>
        <h3>Our Gallery</h3>
        <hr className={styles.aboutstroke}/>
        <div className={styles.aboutGalleryS}>
          <Image src={Gallery1} alt="Gallery 1" />
          <Image src={Gallery2} alt="Gallery 2" />
          <Image src={Gallery3} alt="Gallery 3" />
          <Image src={Gallery4} alt="Gallery 4" />
          <Image src={Gallery5} alt="Gallery 5" />
          <Image src={Gallery6} alt="Gallery 6" />
        </div>
      </div>

      {children}
    </div>
  )
}

export default Page
