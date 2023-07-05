import { Component, useState, useEffect } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid'; //model.id = nanoid()
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const LS_KAY = 'list_contacts';

// const Phonebook = () => {
//   const [contacts, setContacts] = useState(
//     () => JSON.parse(localStorage.getItem(LS_KAY)) ?? []
//   );
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem(LS_KAY, JSON.stringify(contacts));
//   }, [contacts]);

//   const onDeletContact = id => {
//     setContacts(
//       prevContacts =>
//         (prevContacts = contacts.filter(contact => contact.id !== id))
//     );
//   };

//   const onContactInfo = contactData => {
//     const revise = contacts.find(
//       element =>
//         element.name.toLocaleLowerCase() ===
//         contactData.name.toLocaleLowerCase()
//     );
//     if (revise) {
//       alert(`${contactData.name} is aleady in contacs!`);
//       return;
//     }
//     const contactsID = { id: nanoid(), ...contactData };

//     setContacts(prevContacts => ({
//       contacts: [contactsID, ...prevContacts],
//     }));
//   };

//   const getVisibleContacts = () => {
//     const normalisedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalisedFilter)
//     );
//   };

//   const onFilterContact = evt => {
//     setFilter(setFilter => (setFilter = evt.target.value));
//   };

//   return (
//     <div className={css.appDiv}>
//       <h1>Phonebook</h1>
//       <ContactForm onContactInfo={onContactInfo} />
//       <section>
//         <h2>Contacts</h2>
//         <Filter onFilterData={filter} onFilterContact={onFilterContact} />
//         {getVisibleContacts.length > 0 && (
//           <ContactList
//             onDeletContact={onDeletContact}
//             listContacts={getVisibleContacts}
//           />
//         )}
//       </section>
//     </div>
//   );
// };

class Phonebook extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem(LS_KAY));
    if (data) {
      this.setState({ contacts: data });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KAY, JSON.stringify(this.state.contacts));
    }
  }

  onDeletContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  onContactInfo = contactData => {
    const revise = this.state.contacts.find(
      element =>
        element.name.toLocaleLowerCase() ===
        contactData.name.toLocaleLowerCase()
    );
    if (revise) {
      alert(`${contactData.name} is aleady in contacs!`);
      return;
    }
    const contacts = { id: nanoid(), ...contactData };

    this.setState(prewState => ({
      contacts: [contacts, ...prewState.contacts],
    }));
  };

  onFilterContact = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const normalisedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  render() {
    const contacts = this.getVisibleContacts;
    return (
      <div className={css.appDiv}>
        <h1>Phonebook</h1>
        <ContactForm onContactInfo={this.onContactInfo} />
        <section>
          <h2>Contacts</h2>
          <Filter
            onFilterData={this.state.filter}
            onFilterContact={this.onFilterContact}
          />
          {contacts.length > 0 && (
            <ContactList
              onDeletContact={this.onDeletContact}
              listContacts={contacts}
            />
          )}
        </section>
      </div>
    );
  }
}

export default Phonebook;
