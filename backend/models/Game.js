module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Game',{
        title:{
            type:DataTypes.STRING(255)
        },
        image:{
            type:DataTypes.STRING(255)
        },
        price:{
            type:DataTypes.FLOAT
        },
        quantity:{
            type:DataTypes.INTEGER
        }
    },{
        tableName:'games',
        timestamps:false
    })
    return model
}