import Btn from "../Btn/Btn";
import styles from "./Hero.module.scss";

const Hero = ({ title, titleWidth, subtitle, btnTitle, backgroundImage }) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <h1 className={`${styles.hero__title} ${titleWidth ? styles.width : ""}`}>
        {title}
      </h1>
      <p>{subtitle}</p>
      <Btn title={btnTitle} />
    </section>
  );
};
export default Hero;

// `url("../../../public/images/hero/hero-bg.jpg")`
