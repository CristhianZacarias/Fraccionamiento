const ResidentesController = require('../controllers/residentes.controller');
const express = require('express');
const router = express.Router();

router.get('/', ResidentesController.getResidentesList);
router.post('/', ResidentesController.createResidente);
router.get('/:id', ResidentesController.getResidenteById);
router.put('/:id', ResidentesController.updateResidente);
router.delete('/:id', ResidentesController.deleteResidente);

module.exports = router;