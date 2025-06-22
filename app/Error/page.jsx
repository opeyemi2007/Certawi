import styles from "./error.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import errorImg from "./assets/page-not-found.png";
import Link from 'next/link';

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
        <Link className={styles.link}>
          <button className={styles['btn-outline']}>
            <BsArrowLeft className={styles['arrow-left']} />
            Go Back
          </button>
        </Link>
      </div>
      <div className={styles['error-image']}>
        <img src={errorImg} alt="error 404" />
      </div>
    </div>
  );
};

export default Page;
