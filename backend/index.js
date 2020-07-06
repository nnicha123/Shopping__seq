const db = require('./models')
const express = require('express')
const app = express()
const cors = require('cors')

const itemRoute = require('./routes/Item')
const checkoutRoute = require('./routes/CheckOut')
const favouriteRoute = require('./routes/Favourite')
const cakeRoute = require('./routes/Cake')
const gameRoute = require('./routes/Game')
const bagRoute = require('./routes/Bag')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/items',itemRoute)
app.use('/checkouts',checkoutRoute)
app.use('/favourites',favouriteRoute)
app.use('/cakes',cakeRoute)
app.use('/games',gameRoute)
app.use('/bags',bagRoute)

db.sequelize.sync().then(() => {
    app.listen(8000, () => console.log('Server is running at port 8000'))
})