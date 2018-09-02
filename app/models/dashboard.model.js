const mongoose = require('mongoose');

const DashboardSchema = mongoose.Schema({
    title: String,
    config: Object
}, {
    timestamps: true
});

module.exports = mongoose.model('Dashboard', DashboardSchema);