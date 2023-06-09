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

            SELECT *
            FROM armorset AS a
            INNER JOIN helm AS h
            ON a.helmarmor_id = h.helm_id
            INNER JOIN chest AS c
            ON a.chestarmor_id = c.chest_id
            INNER JOIN leg AS l
            ON a.legarmor_id = l.leg_id
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
    }

    // Upgrade feature (needs to have a different data set pulled so that it can access the number on the data table
    // without it changing it's actual data)    

    // updateArmorSet: (req, res) => {
    //     const {id} = req.params
    //     const {type} = req.body
        
    //     sequelize.query(`
    //         UPDATE armorset SET 
    //             helmdefense = helmdefense+1,
    //             chestdefense = chestdefense+1,
    //             legdefense = legdefense+1
    //         WHERE armorset_id = ${id};
    //     `)
    //     .then(dbRes => {
    //         console.log(dbRes[0])
    //         res.status(200).send(dbRes[0][dbRes[0].length-1])})
    //     .catch(err => console.log(err))
    // }


}