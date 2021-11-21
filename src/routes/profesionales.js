const router = require('express').Router();
const ProfesionalController = require('../controllers/profesionales.controller');

router.get('/', (req, res) => {
    result = ProfesionalController.getAllProfesionales();
    res.render('profesionales/listarTodos', result);
});

router.get('/habilitados', (req, res) => {
    result = ProfesionalController.getEnables();
    res.render('profesionales/listarTodos', result);
})

module.exports = router;