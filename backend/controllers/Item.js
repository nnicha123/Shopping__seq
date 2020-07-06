const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const getItems = async(req,res) => {
    const allItems = await db.Item.findAll()
    res.status(200).send(allItems)
}
const addItems = async(req,res) => {
    const {title,img} = req.body
    const newItem = await db.Item.create({
        title:title,
        img:img
    })
    res.status(201).send(newItem)
}

module.exports = {
    getItems,addItems
}