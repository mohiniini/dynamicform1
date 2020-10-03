const mongoose = require('mongoose')
const formSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    salary: Number,
    age: Number
})

module.exports = mongoose.model("formm", formSchema);