import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ onContactInfo }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    onContactInfo({ name, number });
    setName(name => (name = ''));
    setNumber(number => (number = ''));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // pattern="/\[a-zA-Za-яА-Я]{10} [a-zA-Za-яА-Я]{10}/"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={evt => setName(name => (name = evt.target.value))}
          required
        />
      </label>
      <br />
      <label>
        Namber <br />
        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={evt => setNumber(number => (number = evt.target.value))}
          required
        />
      </label>
      <br />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

// class OldContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = evt => {
//     this.setState({ [evt.target.name]: evt.target.value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();

//     this.props.onContactInfo(this.state);

//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label>
//           Name <br />
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             // pattern="/\[a-zA-Za-яА-Я]{10} [a-zA-Za-яА-Я]{10}/"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             value={this.state.name}
//             onChange={this.handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Namber <br />
//           <input
//             type="tel"
//             name="number"
//             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
//             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={this.state.number}
//             onChange={this.handleChange}
//             required
//           />
//         </label>
//         <br />
//         <button className={css.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

export default ContactForm;
