const Category = require('../Models/Category');

const CategoryController = {
    index: (req, res) => {
        Category.getAll((err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.render('category/list', { categories: data });
            }
        });
    },

    add: (req, res) => {
        res.render('category/create');
    },

    create: (req, res) => {
        Category.create(req.body, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/list-category');
            }
        });
    },

    edit: (req, res) => {
        let id = req.params.id;
        Category.findByID(id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.render('category/update', { category: data[0] });
            }
        });
    },

    update: (req, res) => {
        let id = req.params.id;
        Category.update(id, req.body, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/list-category');
            }
        });
    },

    delete: (req, res) => {
        let id = req.params.id;
        Category.delete(id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/list-category');
            }
        });
    },
};

module.exports = CategoryController;