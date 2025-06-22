import React from 'react';
import styles from "./pricing.module.scss";
import { data } from './data';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

function Slider ({ value }) {

  const { per } = data[value];

  return (
    <Carousel className={styles.plansContainer} id={styles.slider} indicatorLabels = {[ "btn1", "btn2", "btn3" ]} controls={false}>
        {data[value].subscription.map((item)=>{
            const { id, sub } = item;

            return(
                <Carousel.Item className={sub.subType} key={id}>
                    <h4>{sub.subType}</h4>

                    <p>{sub.header}</p>

                    <h3>{sub.amount}<span>{per}</span></h3>

                    <p>{sub.text}</p>

                    <article>
                        {sub.subText.map((item)=>{
                            const { id, img, txt } = item;
                            return(
                                <div className="others" key={id}>
                                    <Image src={img} height={100} width={100} alt={txt} />
                                    <span>{txt}</span>   
                                </div>
                            );
                            })}
                    </article>

                    <Link href={sub.linkTo}>
                        {sub.linkText}
                    </Link>
                </Carousel.Item>
            );
        })}
    </Carousel>
  );
}

export default Slider;