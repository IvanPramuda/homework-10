// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const contactController = require('../controllers/contactController');

// ...

// Definisikan rute untuk setiap operasi
router.get('/contact', contactController.getAllContacts);
router.post('/contact', contactController.addContact);
router.put('/contact', contactController.updateContact);
router.delete('/contact', contactController.deleteContact);
router.put(
  '/contact/upload',
  multer({ storage: diskStorage }).single('photo'),
  contactController.setContactPhoto
);

module.exports = router;
