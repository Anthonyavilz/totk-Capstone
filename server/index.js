const express = require('express')
const cors = require('cors')
const {getHelms, getChestArmor, getLegArmor, addArmorSet} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

// Endpoints for armor options
app.get('/helms', getHelms)
app.get('/chestArmor', getChestArmor)
app.get('/legArmor', getLegArmor)

// Endpoints for Armor Creation
app.get('/armorSet', addArmorSet)



app.listen(8760, () => console.log('Getting armor at 8760'))