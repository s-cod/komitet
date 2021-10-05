const { Schema, model } = require('mongoose')

const WorkerModel = new Schema({
  post: { type: String },
  fio: { type: String, required: true },
  surname: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  fio_doc: { type: String },
  phone: { type: String },
  inn: { type: String },
  passport_series: { type: Number },
  passport_number: { type: Number },
  passport_date: { type: Date },
  passpor_organ: { type: String },
  addres: { type: String },
})

module.exports = model('Worker', WorkerModel)
