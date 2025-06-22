'use client'

import React, { useState } from "react";
import styles from "./pricing.module.scss";
import Feature from "./feature";
import Slider from "./slider";
import Link from 'next/link';
import { data, testimonials } from "./data";
import Image from 'next/image'

function Page() {
    const [value, setValue] = useState(0);

    const { per } = data[value];

    return(
        <main>
            <section className={styles.pricing}>
                <article className={styles.text}>
                    <p>PRICING</p>

                    <h3>Choose a plan tailored to your needs</h3>

                    <p>Buy a plan that's right for you. With Certawi 
                        you can tailor your plan to suit your budget and needs. 
                        Choose to upgrade or downgrade your plan at any time – it's up to you!
                    </p>
                </article>

                <article className={styles.plans}>
                    <div className={styles.btnContainer}>
                        {data.map((item,index)=>{
                            return(
                                <div key={item.id} onClick={()=> {setValue(index)}} className={`plan-btn ${index === value && "active-btn"}`}>
                                    {item.plan}
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.plansContainer} id={styles.pc}>
                        {data[value].subscription.map((item)=>{
                            const { id, sub } = item;
                            return(
                                <div className={sub.subType} key={id}>
                                    <h4>{sub.subType}</h4>

                                    <p>{sub.header}</p>

                                    <h3>{sub.amount}<span>{per}</span></h3>

                                    <p>{sub.text}</p>

                                    <article>
                                        {sub.subText.map((item)=>{
                                            const { id, img, txt } = item;
                                            return(
                                                <div className={styles.others} key={id}>
                                                    <Image src={img} width={25} height={25} alt={txt} />
                                                    <span>{txt}</span>   
                                                </div>
                                            );
                                        })}
                                    </article>

                                    <Link href={sub.linkTo}>
                                        {sub.linkText}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    
                    <div className={styles.sliderContainer}>
                        <Slider value={value} />
                    </div>
                </article>
            </section>

            <Feature />

            <section className={styles.testimonials}>
                <article className={styles.text}>
                    <p>TESTIMONIALS</p>

                    <h3>What our clients say about us</h3>

                    <div className={styles.testimonialContainer}>
                        {testimonials.map((item)=>{
                            const { id, text, img, name, position } = item;

                            return(
                                <div key={id}>
                                    <Image src="/Frame.svg" width={25} height={25} alt="quote" />

                                    <p className={styles.txt}>{text}</p>

                                    <div>
                                        <Image src={img} width={25} height={25} alt={name} />

                                        <div>
                                            <p>{name}</p>
                                            <p>{position}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </article>
            </section>

            <section className={styles.bg}></section>
        </main>
    );
}

export default Page;