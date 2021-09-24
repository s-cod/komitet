import mongoose from 'mongoose'

const WorkerModel = new mongoose.Schema({
  // post :{type}
  fio: { type: String, required: true },
  surname: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  fio_doc: { type: String, required: true },
  phone: { type: String, required: true },
  inn: { type: String, required: true },
  passport_series: { type: Number, required: true },
  passport_number: { type: Number, required: true },
  passport_date: { type: Date, required: true },
  passpor_organ: { type: String, required: true },
  addres: { type: String, required: true },
})

export default mongoose.model('Worker', WorkerModel)
