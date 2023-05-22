import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { update } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilterValue);

  const changeFilter = e => {
    dispatch(update(e.currentTarget.value));
  };

  return (
    <label className={css.filter}>
      Find contact by name
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};
