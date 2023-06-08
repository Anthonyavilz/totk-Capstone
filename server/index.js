const express = require('express')
const cors = require('cors')
const {getHelms, getChestArmor, getLegArmor, addArmorSet, getArmorSet, deleteArmorSet, updateArmorSet} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

// Endpoints for armor options
app.get('/helms', getHelms)
app.get('/chestArmor', getChestArmor)
app.get('/legArmor', getLegArmor)

// Endpoint for Armor Creation
app.get('/armorSet', getArmorSet)
app.post('/armorSet', addArmorSet)

// Endpoint for Armor Deletion
app.delete('/armorSet/:id', deleteArmorSet)

// Endpoint for Armor Edit
app.put('/armorSet/:id', updateArmorSet)
// testing out change on branch


app.listen(8760, () => console.log('Getting armor at 8760'))