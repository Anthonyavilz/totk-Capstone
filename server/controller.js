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
    },

    getArmorSet: (req, res) => {
        res.status(200).send(armorSet)
    },

    deleteArmorSet: (req, res) => {
        console.log(req.params)

        let {id} = req.params

        const index = armorSet.findIndex(armor => armor.userId === +id)

        armorSet.splice(index, 1)

        res.sendStatus(200)
    },

    updateArmorSet: (req, res) => {
        // the goal of this is to click on a fairy button, then it will upgrade the armor according to that specific armor set
        // upgrade scale (example: Zoniate Helm will increase from baseDefense of 4 to 7)(extra feature, when the fairy button is clicked)
        // it will display the needed money and needed materials

        // option 1: simple do a plus button and call it a day for the sake of the PUT part of capstone
        // option 2: either find a way to dynamically rewrite or even select new 'iteration' of specific armor based on the ID of the armor piece
        // option 3: same as above but it would include the alert with the 4 different fairy upgrades (this would cycle through something like a forLoop)

        // first i need to add in the ID's of the itmes in the armorSet.json so when the obj in the front is created, I can acess the ID's
        // second I need to add fairy upgrade button to the index.js armor card
        // third I need to do id.params for the new armor card created

        // option1:
        const {id} = req.params
        const {type} = req.body
        console.log(req.body)
        const index = armorSet.findIndex(armor => armor.userId === +id)

        if(type === 'helmUpgrade'){
            armorSet[index].hBaseDefense++
        } 
        
        if(type === 'chestUpgrade'){
            armorSet[index].cBaseDefense++
        }
        
        if(type === 'legUpgrade'){
            armorSet[index].lBaseDefense++
        }
        console.log(armorSet[index])
        res.status(200).send(armorSet[index])
    }


}