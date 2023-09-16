import { Contacts } from './Contacts/Contacts';
import { GlobalStyle } from './GlobalStyle';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <section>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </section>
      <GlobalStyle />
    </>
  );
};
