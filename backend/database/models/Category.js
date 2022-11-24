const { Op } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        image_url: {
            type: dataTypes.STRING(200),
            defaultValue: null
        }
    };

    let config = {
        tableName: 'categories',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Category = sequelize.define(alias, cols, config); 

    Category.associate = function (models) {
        Category.hasMany(models.Product, { // models.Product -> Product es el valor de alias en Product.js
            as: 'product_categories',
            foreignKey: 'category_id',
        })
    }

    return Category
};