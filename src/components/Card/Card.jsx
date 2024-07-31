import styles from "./Card.module.scss";

const Card = ({ title, subtitle, img, userName, userSpan }) => {
  return (
    <div className={styles.wrapperCard}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div className={styles.wrapperUser}>
        <img src={img} alt={userName} />
        <div className={styles.wrapperUser__title}>
          <h4>{userName}</h4>
          <span>{userSpan}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
