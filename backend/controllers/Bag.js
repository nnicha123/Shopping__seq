const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const getBags = async (req,res) => {
    const bags = await db.Bag.findAll()
    res.status(200).send(bags)
}
const addBags = async (req,res) => {
    const {title,image,price,quantity} = req.body
    const newBag = await db.Bag.create({
        title:title,
        image:image,
        price:price,
        quantity:quantity
    })
    res.status(201).send(newBag)
}

module.exports = {
    getBags,addBags
}