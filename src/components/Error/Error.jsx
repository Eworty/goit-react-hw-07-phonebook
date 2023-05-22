import { MdErrorOutline } from 'react-icons/md';
import css from './Error.module.css';

export const Error = ({ message }) => {
  return (
    <div className={css.error}>
      <MdErrorOutline size={32} className={css.icon} />
      <div className={css.text}>
        <p className={css.title}>{message}</p>
        <p className={css.subtitle}>
          Something went wrong... Please try again later.
        </p>
      </div>
    </div>
  );
};
