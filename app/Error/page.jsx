import styles from "./error.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import errorImg from "./assets/page-not-found.png";
import Link from 'next/link';
import Image from 'next/image'

const Page = () => {
  return (
    <div className={styles['error-page']}>
      <h1>We lost this page</h1>
      <p>
        We couldn't find what you are looking for. Let's find a better place for
        you to go.
      </p>
      <div className={styles['error-buttons']}>
        <Link className={styles.link} href="/">
          <button className={styles['btn-solid']}>Go to Certawi Home</button>
        </Link>
        <div className={styles.link}>
          <button className={styles['btn-outline']}>
            <BsArrowLeft className={styles['arrow-left']} />
            Go Back
          </button>
        </div>
      </div>
      <div className={styles['error-image']}>
        <Image src={errorImg} alt="error 404" />
      </div>
    </div>
  );
};

export default Page;
