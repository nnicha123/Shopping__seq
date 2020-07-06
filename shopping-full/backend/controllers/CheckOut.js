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
const deleteCheckOut = async (req,res) => {
    await db.CheckOut.destroy({
        where:{id:req.params.id}
    })
    res.status(204).send()
}
const updateCheckOut = async (req,res) => {
    const targetId = req.params.id
    const {title,image,price,quantity} = req.body
    await db.CheckOut.update({
        title:title,
        image:image,
        price:price,
        quantity:quantity
    }, {
        where:{id:targetId}
    }) 
    res.status(200).send('Updated successfully')
}

module.exports = {
    getCheckOuts,addCheckOuts,deleteCheckOut,updateCheckOut
}