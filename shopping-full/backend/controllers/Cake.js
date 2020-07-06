const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const getCakes = async (req,res) => {
    const cakes = await db.Cake.findAll()
    res.status(200).send(cakes)
}
const addCakes = async (req,res) => {
    const {title,image,price,quantity} = req.body
    const newCake = await db.Cake.create({
        title:title,
        image:image,
        price:price,
        quantity:quantity
    })
    res.status(201).send(newCake)
}

module.exports = {
    getCakes,addCakes
}