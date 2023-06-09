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
    seed: (req, res) => {
        sequelize.query(`
            DROP TABLE IF EXISTS test;
            DROP TABLE IF EXISTS armorSet;
            DROP TABLE IF EXISTS leg;
            DROP TABLE IF EXISTS chest;
            DROP TABLE IF EXISTS helm;
            DROP TABLE IF EXISTS specialEffects;


            CREATE TABLE specialEffects (
                effect_id SERIAL PRIMARY KEY,
                effectName VARCHAR(100)
            );

            CREATE TABLE helm (
                helm_id SERIAL PRIMARY KEY,
                helmName VARCHAR (100),
                helmURL TEXT,
                helmDefense INTEGER,
                helmLocation VARCHAR(100),
                helmLocationURL TEXT,
                effect_id INTEGER REFERENCES specialEffects(effect_id)
            );

            CREATE TABLE chest (
                chest_id SERIAL PRIMARY KEY,
                chestName VARCHAR (100),
                chestURL TEXT,
                chestDefense INTEGER,
                chestLocation VARCHAR(100),
                chestLocationURL TEXT,
                effect_id INTEGER REFERENCES specialEffects(effect_id)
            );

            CREATE TABLE leg (
                leg_id SERIAL PRIMARY KEY,
                legName VARCHAR (100),
                legURL TEXT,
                legDefense INTEGER,
                legLocation VARCHAR(100),
                legLocationURL TEXT,
                effect_id INTEGER REFERENCES specialEffects(effect_id)
            );

            CREATE TABLE armorSet (
                armorSet_id SERIAL PRIMARY KEY,
                armorName VARCHAR (100),
                helmArmor_id INTEGER REFERENCES helm(helm_id),
                chestArmor_id INTEGER REFERENCES chest(chest_id),
                legArmor_id INTEGER REFERENCES leg(leg_id)
            );

            INSERT INTO specialEffects (effectName)
            VALUES 
            ('None'),
            ('Attack Up'),
            ('Charge Atk. Stamina Up'),
            ('Disguise; Bone Weapon Prof.'),
            ('Night Speed Up'),
            ('Stormy Weather Charge'),
            ('Climbing Jump Stamina Up'),
            ('Gloom Attack Resist'),
            ('Shock Damage Resist'),
            ('Hot Weather Charge'),
            ('Fireproof'),
            ('Slip Resistance'),
            ('Cold Weather Charge'),
            ('Impact Proof'),
            ('Shining Steps'),
            ('Rupee Padding'),
            ('Lightning Proof'),
            ('Unfreezable'),
            ('Swim Dash Stamina Up'),
            ('Master Sword Beam Up'),
            ('Energy Up');


            INSERT INTO helm (helmName, helmURL, helmDefense, helmLocation, helmLocationURL, effect_id)
            VALUES 
            ('Zonaite Helm', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zonaite_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4, 'Light Case Island', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279584', 21),
            ('Charged Headdress', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/charged_headdress_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Dracozo River', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282574', 6);

            INSERT INTO chest (chestName, chestURL, chestDefense, chestLocation, chestLocationURL, effect_id)
            VALUES
            ('Zonaite Waistguard','https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zonaite_waistguard_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4, 'Yansamin Shrine', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279590', 21),
            ('Charged Shirt','https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/charged_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Dracoxo Lake', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282578', 6);
            
            INSERT INTO leg (legName, legURL, legDefense, legLocation, legLocationURL, effect_id)
            VALUES
            ('Zonaite Shin Guard', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zonaite_shin_guards_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4,'Sky Mine', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280286', 21),
            ('Charged Trousers', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/charged_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3,'Damal Forest', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282577', 6);
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}