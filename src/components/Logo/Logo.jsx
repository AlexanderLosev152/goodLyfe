import styles from "./Logo.module.scss";

const Logo = ({ title, span }) => {
  return (
    <a className={styles.logo} href="#">
      {title}
      <span>{span}</span>
    </a>
  );
};

export default Logo;
