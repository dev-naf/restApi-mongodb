const router = require('express').Router()
const controller = require('../controller/controller')

// ----- test
//router.get('/', controller.test)

router.post('/save', controller.saveStudent)

router.get('/', controller.allStudent)

router.get('/:id', controller.getStudent)

router.delete('/:id', controller.deleteStudent)

module.exports = router