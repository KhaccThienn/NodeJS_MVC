const conn = require('../../Database/connect');

const Category = {
    getAll: (callback) => {
        return conn.query('SELECT * FROM categories', callback);
    },

    findByID: (id, callback) => {
        return conn.query(`SELECT * FROM categories WHERE id = '${id}'`, callback);
    },

    create: (data, callback) => {
        return conn.query(`INSERT INTO categories (name, status) VALUES ('${data.name}', '${data.status}')`, callback);
    },

    update: (id, data, callback) => {
        return conn.query(`UPDATE categories SET name = '${data.name}', status = '${data.status}' WHERE id = '${id}'`, callback);
    },

    delete: (id, callback) => {
        return conn.query(`DELETE FROM categories WHERE id = '${id}'`, callback);
    }
}

module.exports = Category;