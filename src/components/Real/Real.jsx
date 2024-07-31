import styles from "./Real.module.scss";

import Card from "../Card/Card";

const Real = () => {
  return (
    <div className={styles.wrapperGrid}>
      <div className={styles.wrapperTitle}>
        <h2>Real Stories from Real Customers</h2>
        <p>Be inspired with these experiences.</p>
      </div>
      <Card
        title="3Kg lost!"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec felis. Sed id egestasegestas risu."
        userName="James John"
        userSpan="Mother of two"
      />
      <Card
        title="17Kg lost!"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in mo."
        userName="Mary Patricia"
        userSpan="Mother of two"
      />
      <Card
        title="43Kg lost!"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        userName="Robert Micheal"
        userSpan="Mother of two"
      />
    </div>
  );
};

export default Real;
