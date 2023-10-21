// controllers/contactController.js
const contactRepository = require('../repositories/contactRepository');

module.exports = {
  getAllContacts: (req, res) => {
    const contacts = contactRepository.getAllContacts();
    res.send(contacts);
  },
  addContact: (req, res) => {
    const { name, phone } = req.body;
    contactRepository.addContact(name, phone);
    res.send({ success: true });
  },
  updateContact: (req, res) => {
    const { index } = req.query;
    const { name, phone } = req.body;
    contactRepository.updateContact(index, name, phone);
    res.send({ success: true });
  },
  deleteContact: (req, res) => {
    const { index } = req.query;
    contactRepository.deleteContact(index);
    res.send({ success: true });
  },
  setContactPhoto: (req, res) => {
    const { index } = req.query;
    const photo = req.file.path;
    contactRepository.setContactPhoto(index, photo);
    res.send(photo);
  },
};
