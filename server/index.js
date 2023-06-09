require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env

const {seed} = require('./seed')
const {getHelms, getChestArmor, getLegArmor, addArmorSet, deleteArmorSet} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

// Seed Information
app.post('/seed', seed)

// Endpoints for armor options
app.get('/helms', getHelms)
app.get('/chestArmor', getChestArmor)
app.get('/legArmor', getLegArmor)

// Endpoint for Armor Creation
app.post('/armorSet', addArmorSet)

// Endpoint for Armor Deletion
app.delete('/armorSet/:id', deleteArmorSet)

// Endpoint for Armor Edit
// app.put('/armorSet/:id', updateArmorSet)


app.listen(SERVER_PORT, () => console.log(`Getting armor at ${SERVER_PORT}`))