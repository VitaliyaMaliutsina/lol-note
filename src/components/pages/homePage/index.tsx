import styles from "./styles.module.scss";
import Button from "@/components/Button";
const HomePage = () => {
  return (
    <>
      <div className={styles.container}></div>
      <Button variant="primary">Редактировать профиль</Button>
    </>
  );
};

export default HomePage;
