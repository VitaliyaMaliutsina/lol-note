import styles from "./styles.module.scss";
import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";
const HomePage = () => {
  return (
    <>
      <div className={styles.container}></div>
      <Button variant="primary">редактировать профиль</Button>
      <LinkButton variant="outline" href="/login">
        <span>{">"}</span>
        показать все
      </LinkButton>
    </>
  );
};

export default HomePage;
