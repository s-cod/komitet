import { Router } from 'express'

import WorkerController from '../controllers/workerController.js'

const router = new Router()

router.post('/workers', WorkerController.create)
router.get('/workers', WorkerController.getAll)
router.get('/workers/:id', WorkerController.getOne)
router.put('/workers', WorkerController.update)
router.delete('/workers/:id', WorkerController.delete)

export default router
