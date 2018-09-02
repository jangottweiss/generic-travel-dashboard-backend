module.exports = (app) => {
    const data = require('../controllers/data.controller.js');
    
    app.post('/data', data.create);
    app.get('/data', data.findAll);
    app.get('/data/:dataId', data.findOne);
    app.put('/data/:dataId', data.update);
    app.delete('/data/:dataId', data.delete);
}