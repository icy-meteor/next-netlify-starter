import * as styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Image
          src="/netliheart.svg"
          width={100}
          height={400}
          className="image"
        ></Image>
        Made with{" "}
        <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />{" "}
        for you
      </footer>
    </>
  );
}
