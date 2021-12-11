const AvenidaController = require('../controllers/avenida.controllers');
const express = require('express');
const router = express.Router();

router.get('/', AvenidaController.getAvenidaList);
router.post('/', AvenidaController.createAvenida);
router.get('/:id', AvenidaController.getAvenidaById);
router.put('/:id', AvenidaController.updateAvenida);
router.delete('/:id', AvenidaController.deleteAvenida);

module.exports = router;