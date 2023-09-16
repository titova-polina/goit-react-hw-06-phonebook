import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      const newContact = action.payload;

      const isContactExists = state.find(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      );

      if (isContactExists) {
        return alert(`${newContact.name} is already in contacts`);
      } else {
        state.push(newContact);
      }
    },
    deleteContact(state, action) {
      const contactId = action.payload;
      return state.filter(contact => contact.id !== contactId);
    },
  },
});

export const contactsReduser = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
