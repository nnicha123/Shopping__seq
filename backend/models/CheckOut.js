module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('CheckOut',{
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
        tableName:'checkouts',
        timestamps:false
    })

    return model
}