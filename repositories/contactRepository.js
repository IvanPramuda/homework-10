// repositories/contactRepository.js
const contactModel = require('../models/contactModel');

module.exports = {
  getAllContacts: () => contactModel.getAllContacts(),
  addContact: (name, phone) => contactModel.addContact(name, phone),
  updateContact: (index, name, phone) => contactModel.updateContact(index, name, phone),
  deleteContact: (index) => contactModel.deleteContact(index),
  setContactPhoto: (index, photo) => contactModel.setContactPhoto(index, photo),
};
