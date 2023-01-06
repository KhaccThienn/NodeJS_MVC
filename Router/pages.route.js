const HomeController = require('../App/Controllers/HomeController');

const page_route = (app) => {
    app.get('/', HomeController.index);
}

module.exports = page_route;