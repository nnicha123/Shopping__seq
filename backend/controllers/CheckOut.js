const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const getCheckOuts = async (req,res) => {
    const itemsCheckedOut = await db.CheckOut.findAll({})
    res.status(200).send(itemsCheckedOut)
}
const addCheckOuts = async(req,res) => {
    const {title,image,price,quantity} = req.body
    const newCheckout = await db.CheckOut.create({
        title:title,
        image:image,
        price:price,
        quantity:quantity
    })
    res.status(201).send(newCheckout)
}

module.exports = {
    getCheckOuts,addCheckOuts
}