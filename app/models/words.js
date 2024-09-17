const mongoose = require('mongoose')
const UserScheme = new mongoose.Schema(
    {
        wordNombre: {
            type: String
        },
        nombre: {
            type: String
        },
        uso: {
            type: Number
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = mongoose.model('words', UserScheme)