const GuardiasController = require('../controllers/guardias.controllers');
const express = require('express');
const router = express.Router();

router.get('/', GuardiasController.getGuardiasList);
router.post('/', GuardiasController.createGuardia);
router.get('/:id', GuardiasController.getGuardiaById);
router.put('/:id', GuardiasController.updateGuardia);
router.delete('/:id', GuardiasController.deleteGuardia);

module.exports = router;