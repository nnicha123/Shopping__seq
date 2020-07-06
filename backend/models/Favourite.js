module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Favourite',{
        title: {
            type:DataTypes.STRING(255)
        },
        image:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName:'favourites',
        timestamps:false
    })

    return model
}