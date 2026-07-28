import styles from "./Steps.module.scss";
import { clsx } from "clsx";

type TStep = {
  id: string;
  label: string;
};

type TStepsProps = {
  items: TStep[];
  currentStep: number;
};

const Steps = (props: TStepsProps) => {
  const { items, currentStep } = props;

  return (
    <ol className={styles.list}>
      {items.map((step, index) => {
        const stepNumber = index + 1;
        const isCurrent = stepNumber === currentStep;

        return (
          <li
            key={step.id}
            className={clsx(styles.listItem, { [styles.isCurrent]: isCurrent })}
          >
            <span className={styles.step}>{stepNumber}</span>
            <span className={styles.stepLabel}>{step.label}</span>
          </li>
        );
      })}
    </ol>
  );
};

export default Steps;
