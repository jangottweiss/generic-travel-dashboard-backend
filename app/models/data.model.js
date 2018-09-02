const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    data: Object
}, {
    timestamps: true
});

module.exports = mongoose.model('Data', DataSchema);