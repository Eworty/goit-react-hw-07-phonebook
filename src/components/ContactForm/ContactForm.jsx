import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';

import { toast } from 'react-toastify';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacs = useSelector(selectContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const checkContactName = query => {
    return contacs.some(
      ({ name }) => name.toLowerCase() === query.toLowerCase()
    );
  };

  const handleChange = e => {
    const { name: inputName, value } = e.currentTarget;

    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log(
          `Error: there isn't ${name} input for value ${value}. Check form markup.`
        );
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContactName(name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      className={css['contact-form']}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label htmlFor={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>

      <label htmlFor={numberInputId}>
        Number
        <input
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>

      <div className={css['buttons-bar']}>
        <button type="submit">Add contact</button>
        <button
          type="button"
          onClick={reset}
          disabled={!name && !number}
          className={!name && !number ? css.disabled : undefined}
        >
          Clear
        </button>
      </div>
    </form>
  );
};
