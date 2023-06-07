let helms = require('./armor/helm.json')
let chestArmor = require('./armor/chest.json')
let legArmor = require('./armor/leg.json')

module.exports = {
    getHelms: (req, res) => {
        res.status(200).send(helms)
    },

    getChestArmor: (req, res) => {
        res.status(200).send(chestArmor)
    },

    getLegArmor: (req, res) => {
        res.status(200).send(legArmor)
    }


}