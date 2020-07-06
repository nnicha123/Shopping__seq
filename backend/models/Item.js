module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Item',{
        title:{
            type:DataTypes.STRING(255)
        },
        img:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName:'items',
        timestamps:false
    })
    model.associate = models => {
        model.hasOne(models.CheckOut,{foreignKey:'item_id'})
    }
    return model
}