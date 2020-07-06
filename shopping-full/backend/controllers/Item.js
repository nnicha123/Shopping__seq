const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const getItems = async(req,res) => {
    const allItems = await db.Item.findAll()
    res.status(200).send(allItems)
}
const addItems = async(req,res) => {
    const {title,image,price,quantity} = req.body
    const newItem = await db.Item.create({
        title:title,
        image:image,
        price:price,
        quantity:quantity
    })
    res.status(201).send(newItem)
}

module.exports = {
    getItems,addItems
}