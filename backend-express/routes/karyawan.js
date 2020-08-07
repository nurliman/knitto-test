var express = require('express');
var router = express.Router();

const karyawanController = require('../controllers').karyawan;

/* Karyawan Router */
router.get('/', karyawanController.list);
router.get('/:id', karyawanController.getById);
router.post('/', karyawanController.add);
router.put('/:id', karyawanController.update);
router.delete('/:id', karyawanController.delete);

module.exports = router;
