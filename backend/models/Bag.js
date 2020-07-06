module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Bag',{
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
        tableName:'bags',
        timestamps:false
    })
    return model
}