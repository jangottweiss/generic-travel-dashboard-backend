module.exports = (app) => {
    const dashboard = require('../controllers/dashboard.controller.js');
    
    app.post('/dashboard', dashboard.create);
    app.get('/dashboard', dashboard.findAll);
    app.get('/dashboard/:dashboard', dashboard.findOne);
    app.put('/dashboard/:dashboard', dashboard.update);
    app.delete('/dashboard/:dashboard', dashboard.delete);
}