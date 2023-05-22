import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css['contact-list']}>
      {visibleContacts.map(contact => {
        const { name, phone: number, id } = contact;
        return (
          <li className={css['contact-item']} key={id}>
            <p className={css['contact-text']}>
              <span className={css['contact-name']}>{name}:</span> {number}
            </p>
            <button
              className={css['delete-btn']}
              type="button"
              onClick={() => handleDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
