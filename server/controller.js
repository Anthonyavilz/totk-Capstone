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
        const {arName, helmObj, chestObj, legObj} = req.body

        let newArmorSet = {
            "userId": globalId,
            "armorSetName": arName,
            "helmPieceName": ,
            "helmUrl": helmObj.hURL,
            "helmDefense": helmObj.hDefense,
            "helmEffect": helmObj.hEffect,
            "helmLocation": helmObj.hLocation,
            "chestPieceName": chestObj.cName,
            "chestUrl": chestObj.cURL,
            "chestDefense": chestObj.cDefense,
            "chestEffect": chestObj.cEffect,
            "chestLocation": chestObj.cLocation,
            "legPieceName": legObj.lName,
            "legUrl": legObj.lURL,
            "legDefense": legObj.lDefense,
            "legEffect": legObj.lEffect,
            "legLocation": legObj.lLocation 
        }

        armorSet.push(newArmorSet)

        globalId++

        res.status(200).send(armorSet)
    }


}