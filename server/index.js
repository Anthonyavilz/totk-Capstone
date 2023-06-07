const express = require('express')
const cors = require('cors')
const {getHelms, getChestArmor, getLegArmor} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

// Endpoints for armor options
app.get('/helms', getHelms)
app.get('/chestArmor', getChestArmor)
app.get('/legArmor', getLegArmor)




app.listen(8760, () => console.log('Getting armor at 8760'))