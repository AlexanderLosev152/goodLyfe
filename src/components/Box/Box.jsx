import Btn from "../Btn/Btn";
import styles from "./Box.module.scss";

const Box = ({ img, title, subtitle, btnTitle }) => {
  return (
    <div className={styles.box}>
      <div className={styles.box__img}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Btn title={btnTitle} />
      </div>
    </div>
  );
};
export default Box;
