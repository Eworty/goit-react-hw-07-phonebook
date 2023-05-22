import { ImSpinner3 } from 'react-icons/im';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <ImSpinner3 size={16} className={css['icon-spin']} />
      <span className={css['loader-text']}>Loading...</span>
    </div>
  );
};
