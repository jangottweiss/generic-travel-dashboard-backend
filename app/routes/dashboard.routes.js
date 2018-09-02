module.exports = (app) => {
    const dashboard = require('../controllers/dashboard.controller.js');
    
    app.post('/dashboard', dashboard.create);
    app.get('/dashboard', dashboard.findAll);
    app.get('/dashboard/:dashboardId', dashboard.findOne);
    app.put('/dashboard/:dashboardId', dashboard.update);
    app.delete('/dashboard/:dashboardId', dashboard.delete);
}