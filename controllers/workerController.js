const Worker = require('../models/workerModel.js')

class WorkerController {
  async create(req, res) {
    try {
      const {
        post,
        fio,
        surname,
        firstname,
        lastname,
        fio_doc,
        phone,
        inn,
        passport_series,
        passport_number,
        passport_date,
        passpor_organ,
        addres,
      } = req.body
      const worker = await Worker.create({
        post,
        fio,
        surname,
        firstname,
        lastname,
        fio_doc,
        phone,
        inn,
        passport_series,
        passport_number,
        passport_date,
        passpor_organ,
        addres,
      })
      res.json(worker)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAll(req, res) {
    try {
      const workers = await Worker.find()
      return res.json(workers)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params
      if (!id) {
        res.status(400).json({ message: 'ID не указан' })
      }
      const worker = await Worker.findById(id)
      return res.send(worker)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(req, res) {
    try {
      const worker = req.body
      if (!worker._id) {
        res.status(400).json({ message: 'ID не указан' })
      }
      const updatedWorker = await Worker.findByIdAndUpdate(worker._id, worker, {
        new: true,
      })
      return res.json(updatedWorker)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params
      if (!id) {
        res.status(400).json({ message: 'ID не указан' })
      }
      const worker = await Worker.findByIdAndDelete(id)
      res.json(worker)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new WorkerController()
