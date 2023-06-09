require('dotenv').config()
const {CONNECTION_STRING } = process.env

const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }

})

module.exports = {
    getHelms: (req, res) => {
        sequelize.query(`
            SELECT *
            FROM helm
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getChestArmor: (req, res) => {
        sequelize.query(`
            SELECT *
            FROM chest
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getLegArmor: (req, res) => {
        sequelize.query(`
            SELECT *
            FROM leg
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },


    addArmorSet: (req, res) => {
        console.log(req.body)
        const {arName, hName, cName, lName} = req.body

        sequelize.query(`
            INSERT INTO armorset (armorname, helmArmor_id, chestArmor_id, legArmor_id)
            VALUES ('${arName}', ${hName}, ${cName}, ${lName});

            SELECT 
            
            a.armorset_id, a.armorname, a.helmArmor_id, a.chestArmor_id, a.legArmor_id,
            h.helm_id, helmname, h.helmurl, h.helmdefense, h.helmlocation, h.effect_id,
            c.chest_id, c.chestname, c.chesturl, c.chestdefense, c.chestlocation, c.effect_id,
            l.leg_id, l.legname, l.legurl, l.legdefense, l.leglocation, l.effect_id,
            e.effect_id, e.effectname
             
            FROM armorset AS a
            JOIN helm AS h ON a.helmarmor_id = h.helm_id
            JOIN chest AS c ON a.chestarmor_id = c.chest_id
            JOIN leg AS l ON a.legarmor_id = l.leg_id
            JOIN specialeffects AS e ON h.effect_id = e.effect_id
            `)
        .then(dbRes => {
            console.log(dbRes[0])
            res.status(200).send(dbRes[0][dbRes[0].length-1])})
        .catch(err => console.log(err))
    },

    deleteArmorSet: (req, res) => {
        console.log(req.params)

        let {id} = req.params

        sequelize.query(`
            DELETE 
            FROM armorset
            WHERE armorset_id = ${id}
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
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
        
        sequelize.query(`
            UPDATE armorset SET 
                helmdefense = helmdefense+1,
                chestdefense = chestdefense+1,
                legdefense = legdefense+1
            WHERE armoset_id = ${id} AND armorset_id = ${type};
        `)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    }


}