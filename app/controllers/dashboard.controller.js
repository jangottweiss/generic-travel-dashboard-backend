const Dashboard = require('../models/dashboard.model.js');

exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Dashboard content can not be empty"
        });
    }

    // Create a Dashboard
    const dashboard = new Dashboard({
        title: req.body.title || "Untitled Dashboard", 
        config: req.body.config
    });

    // Save Dashboard in the database
    dashboard.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Dashboard."
        });
    });
};

// Retrieve and return all dashboards from the database.
exports.findAll = (req, res) => {
    Dashboard.find()
    .then(dashboard => {
        res.send(dashboard);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving dashboard."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};