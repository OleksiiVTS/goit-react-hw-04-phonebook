import PropTypes from 'prop-types';
import React from 'react';

const ContactItem = ({ onDeletContact, id, name, number }) => (
  <>
    <p>
      {name}: {number}
    </p>
    <button type="button" onClick={() => onDeletContact(id)}>
      &times;
    </button>
  </>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
