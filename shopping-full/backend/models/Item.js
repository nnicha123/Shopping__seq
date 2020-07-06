module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Item',{
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
        tableName:'items',
        timestamps:false
    })
    return model
}