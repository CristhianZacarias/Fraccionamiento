const InvitadosController = require('../controllers/invitados.controllers');
const express = require('express');
const router = express.Router();

router.get('/', InvitadosController.getInvitadosList);
router.post('/', InvitadosController.createInvitado);
router.get('/:id', InvitadosController.getInvitadoById);
router.put('/:id', InvitadosController.updateInvitado);
router.delete('/:id', InvitadosController.deleteInvitado);

module.exports = router;