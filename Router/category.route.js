const CategoryController = require('../App/Controllers/CategoryController');

const category_route = (app) => {
    app.get('/list-category', CategoryController.index);

    app.get('/add-category', CategoryController.add);
    app.post('/add-category', CategoryController.create);

    app.get('/update-category/:id', CategoryController.edit);
    app.post('/update-category/:id', CategoryController.update);

    app.get('/delete-category/:id', CategoryController.delete);
}

module.exports = category_route;