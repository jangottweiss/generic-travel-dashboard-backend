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

// Find a single dashboard with a dashboardId
exports.findOne = (req, res) => {
    Dashboard.findById(req.params.dashboardId)
    .then(dashboard => {
        if(!dashboard) {
            return res.status(404).send({
                message: "Dashboard not found with id " + req.params.dashboardId
            });            
        }
        res.send(dashboard);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "dashboard not found with id " + req.params.dashboardId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving dashboard with id " + req.params.dashboardId
        });
    });
};

// Update a dashboard identified by the dashboardId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "dashboard content can not be empty"
        });
    }

    // Find dashboard and update it with the request body
    Dashboard.findByIdAndUpdate(req.params.dashboardId, {
        title: req.body.title || "Untitled dashboard",
        content: req.body.content
    }, {new: true})
    .then(dashboard => {
        if(!dashboard) {
            return res.status(404).send({
                message: "dashboard not found with id " + req.params.dashboardId
            });
        }
        res.send(dashboard);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "dashboard not found with id " + req.params.dashboardId
            });                
        }
        return res.status(500).send({
            message: "Error updating dashboard with id " + req.params.dashboardId
        });
    });
};

// Delete a dashboard with the specified dashboardId in the request
exports.delete = (req, res) => {
    dashboard.findByIdAndRemove(req.params.dashboardId)
    .then(dashboard => {
        if(!dashboard) {
            return res.status(404).send({
                message: "dashboard not found with id " + req.params.dashboardId
            });
        }
        res.send({message: "dashboard deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "dashboard not found with id " + req.params.dashboardId
            });                
        }
        return res.status(500).send({
            message: "Could not delete dashboard with id " + req.params.dashboardId
        });
    });
};