// models/contactModel.js
const contacts = [
    {
      name: 'amir',
      phone: '085482938471',
      photo: null,
    },
    {
      name: 'budi',
      phone: '086452738493',
      photo: null,
    },
  ];
  
  module.exports = {
    getAllContacts: () => contacts,
    addContact: (name, phone) => {
      contacts.push({ name, phone, photo: null });
    },
    updateContact: (index, name, phone) => {
      contacts[index] = { name, phone, photo: contacts[index].photo };
    },
    deleteContact: (index) => {
      contacts.splice(index, 1);
    },
    setContactPhoto: (index, photo) => {
      contacts[index].photo = photo;
    },
  };
  