const { Router } = require('express')
const WorkerController = require('../controllers/workerController.js')
const UserController = require('../controllers/userController.js')

const router = Router()

router.post('/registartion', UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.activate)
router.get('/refresh', UserController.refresh)
router.get('/users', UserController.getUsers)

router.post('/workers', WorkerController.create)
router.get('/workers', WorkerController.getAll)
router.get('/workers/:id', WorkerController.getOne)
router.put('/workers', WorkerController.update)
router.delete('/workers/:id', WorkerController.delete)

module.exports = router
