import { FC } from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import './styles.css'; // Import regular stylesheet

export const CssModule: FC = () => {
  return (
    <div>
      <button className={styles.error} type="button">
        CssModule
      </button>
    </div>
  );
};
