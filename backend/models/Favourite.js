module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Favourite',{
        title: {
            type:DataTypes.STRING(255)
        },
        img:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName:'favourites',
        timestamps:false
    })
    model.associate = models => {
        model.belongsTo(models.Item,{foreignKey:'item_id'})
    }
    return model
}