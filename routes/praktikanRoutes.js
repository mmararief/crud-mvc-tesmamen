const express = require('express');
const praktikanController = require('../controllers/praktikanController');

const router = express.Router();

router.post('/tambah', praktikanController.tambahPraktikan);
router.get('/tambah', (req, res) => {
  res.render('tambahpraktikan');
});
router.get('/:id/edit', praktikanController.getPraktikan)
router.delete('/:id', praktikanController.deletePraktikan)
router.put('/edit', praktikanController.editPraktikum);
module.exports = router;
