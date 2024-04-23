const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario')

router.get('/usuario', usuarioController.getAll)
router.get('/usuario/:id', usuarioController.getById)

router.post('/usuario', usuarioController.createUsuario)

router.get('/turmas', turmaController.getAll)
router.get('/turmas/:id', turmaController.getById)

router.get('/usuario', usuarioController.listarUsuarios)

module.exports = router;