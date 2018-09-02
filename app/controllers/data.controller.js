const Data = require('../models/data.model.js');

exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "data content can not be empty"
        });
    }

    // Create a Data Object
    const data = new Data({       
        data: req.body.data
    });

    // Save data in the database
    data.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the data."
        });
    });
};

// Retrieve and return all data from the database.
exports.findAll = (req, res) => {
    Data.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        });
    });
};

// Find a single data with a dataId
exports.findOne = (req, res) => {
    Data.findById(req.params.dataId)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "data not found with id " + req.params.dataId
            });            
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "data not found with id " + req.params.dataId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving data with id " + req.params.dataId
        });
    });
};

// Update a data identified by the dataId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "data content can not be empty"
        });
    }

    // Find data and update it with the request body
    Data.findByIdAndUpdate(req.params.dataId, {
        title: req.body.title || "Untitled data",
        content: req.body.content
    }, {new: true})
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "data not found with id " + req.params.dataId
            });
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "data not found with id " + req.params.dataId
            });                
        }
        return res.status(500).send({
            message: "Error updating data with id " + req.params.dataId
        });
    });
};

// Delete a data with the specified dataId in the request
exports.delete = (req, res) => {
    Data.findByIdAndRemove(req.params.dataId)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "data not found with id " + req.params.dataId
            });
        }
        res.send({message: "data deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "data not found with id " + req.params.dataId
            });                
        }
        return res.status(500).send({
            message: "Could not delete data with id " + req.params.dataId
        });
    });
};