import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import React from 'react';
import css from './ContactItem.module.css';

const ContactList = ({ onDeletContact, listContacts }) => {
  return (
    <ul>
      {listContacts.map(listContact => (
        <li className={css.itemContact} key={listContact.id}>
          <ContactItem
            onDeletContact={onDeletContact}
            id={listContact.id}
            name={listContact.name}
            number={listContact.number}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  listContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};

export default ContactList;
