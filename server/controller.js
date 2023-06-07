let helms = require('./armor/helm.json')
let chestArmor = require('./armor/chest.json')
let legArmor = require('./armor/leg.json')
let armorSet = require('./armor/armorSet.json')
let globalId = 2

module.exports = {
    getHelms: (req, res) => {
        res.status(200).send(helms)
    },

    getChestArmor: (req, res) => {
        res.status(200).send(chestArmor)
    },

    getLegArmor: (req, res) => {
        res.status(200).send(legArmor)
    },


    addArmorSet: (req, res) => {
        console.log(req.body)
        const {arName, hName, cName, lName} = req.body

        const hIndex = helms.findIndex(helm => helm.helmId === +hName)
        const cIndex = chestArmor.findIndex(chest => chest.chestId === +cName)
        const lIndex = legArmor.findIndex(leg => leg.legId === +lName)

        let newArmorSet = {
            "userId": globalId,
            "armorSetName": arName,
            ...helms[hIndex],
            ...chestArmor[cIndex],
            ...legArmor[lIndex]

        }

        console.log(newArmorSet)
        armorSet.push(newArmorSet)

        globalId++

        res.status(200).send(armorSet)
    }


}