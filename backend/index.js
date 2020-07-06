const db = require('./models')
const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.use('/managers',managerRoutes)
// app.use('/branches',branchRoutes)
// app.use('/accounts',accountRoutes)
// app.use('/customers',customerRoutes)

db.sequelize.sync().then(() => {
    app.listen(8000, () => console.log('Server is running at port 8000'))
})