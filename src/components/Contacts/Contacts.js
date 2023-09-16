import { useDispatch, useSelector } from 'react-redux';
import { Item, Btn } from './Contacts.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contact';
export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const search = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(
    contact =>
      !search ||
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.number.includes(search)
  );

  return (
    <>
      <ul>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Btn onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Btn>
          </Item>
        ))}
      </ul>
    </>
  );
};
