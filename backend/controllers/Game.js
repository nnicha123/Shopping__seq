const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const getGames = async (req,res) => {
    const games = await db.Game.findAll()
    res.status(200).send(games)
}
const addGames = async (req,res) => {
    const {title,image,price,quantity} = req.body
    const newGame = await db.Game.create({
        title:title,
        image:image,
        price:price,
        quantity:quantity
    })
    res.status(201).send(newGame)
}

module.exports = {
    getGames,addGames
}