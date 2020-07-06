const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const getFavourites = async (req,res) => {
    const getFav = await db.Favourite.findAll()
    res.status(200).send(getFav)
}
const addFavourites = async (req,res) => {
    const {title,image} = req.body
    const addFav = await db.Favourite.create({
        title:title,
        image: image
    })
    res.status(201).send(addFav)
}
const deleteFavourite = async (req,res) => {
    await db.Favourite.destroy({
        where:{id:req.params.id}
    })
    res.status(204).send()
}

module.exports = {
    getFavourites,addFavourites,deleteFavourite
}