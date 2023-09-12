import { Contacts } from './Contacts/Contacts';
import { GlobalStyle } from './GlobalStyle';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isContactExists = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (isContactExists) {
      return alert(`${newContact.name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const changeNameFilter = newName => {
    setFilter(newName);
  };

  const handleDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <section>
        <h1>Phonebook</h1>
        <Form onAdd={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeNameFilter} />
        <Contacts contacts={visibleContacts} onDelete={handleDelete} />
      </section>
      <GlobalStyle />
    </>
  );
};
