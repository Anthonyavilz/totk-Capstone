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
                helmEffect VARCHAR(100)
            );

            CREATE TABLE chest (
                chest_id SERIAL PRIMARY KEY,
                chestName VARCHAR (100),
                chestURL TEXT,
                chestDefense INTEGER,
                chestLocation VARCHAR(100),
                chestLocationURL TEXT,
                chestEffect VARCHAR(100)
            );

            CREATE TABLE leg (
                leg_id SERIAL PRIMARY KEY,
                legName VARCHAR (100),
                legURL TEXT,
                legDefense INTEGER,
                legLocation VARCHAR(100),
                legLocationURL TEXT,
                legEffect VARCHAR(100)
            );

            CREATE TABLE armorSet (
                armorSet_id SERIAL PRIMARY KEY,
                armorName VARCHAR (100),
                helmArmor_id INTEGER REFERENCES helm(helm_id),
                chestArmor_id INTEGER REFERENCES chest(chest_id),
                legArmor_id INTEGER REFERENCES leg(leg_id)
            );

            INSERT INTO helm (helmName, helmURL, helmDefense, helmLocation, helmLocationURL, helmEffect)
            VALUES 
            ('Mask of Awakening', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/mask_of_awakening_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Thundra Plateau', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280863', 'None'),
            ('Barbarian Helm', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/barbarian_helm-armor-zelda-totk-wiki-guide.png', 3, 'Robred Dropoff Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279726', 'Attack Up'),
            ('Charged Headdress', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/charged_headdress_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Dracozo River', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282574', 'Stormy Weather Charge'),
            ('Climbers Bandanna', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/climbers_bandanna_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Ploymous Mountain Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279675', 'Climb Speed Up'),
            ('Dark Hood', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/dark_hood_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Bargainer Statue', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279744', 'None'),
            ('Hood of The Depths', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/hood_of_the_depths_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Bargainer Statue', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279748', 'Gloom Resistance'),
            ('Desert Voe', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/desert_voe_headband_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 5, 'Saulas Shop', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279433', 'Heat Resistance'),
            ('Ember Headdress', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/ember_headdress_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'YunoboCo HQ South', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280548', 'Hot Weather Attack'),
            ('Evil Spirit Mask', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/evil_spirit_mask-armor-zelda-totk-wiki-guide.png', 4, 'South Lomei Prophecy', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280877', 'Stealth Up'),
            ('Fierce Deitys Mask', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/fierce_deitys_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 5, 'Skull Lake Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280133', 'Attack Up'),
            ('Flamebreaker Helm', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/flamebreaker_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Armor Shop Goron City', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279416', 'Flame Guard'),
            ('Froggy Hood', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/froggy_hood_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Potential Princess Sightings', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277847', 'Slip Resistance'),
            ('Frostbite Headdress', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/frostbite_headdress_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Lake Kilsie', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280713', 'Cold Weather Attack'),
            ('Glide Mask', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/glide_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Valor Island', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279426', 'Skydive Mobility Up'),
            ('Cap of the Hero', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_the_hero_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Depths', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280813', 'None'),
            ('Hylian Hood', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/hylian_hood_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Mubs Shop Lookout Landing', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279419', 'None'),
            ('Miners Mask', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/miners_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Abandoned Kara Kara Mine', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279725', 'Glow'),
            ('Mystic Headpiece', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/mystic_headpiece_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Koltin Shop', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=281132', 'Rupee Padding'),
            ('Phantom Helmet', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/phantom_helmet_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 8, 'Puffer Beach Overhead Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280851', 'Attack Up'),
            ('Radiant Mask', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/radiant_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Armor Shop Kakariko Village', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279443', 'None'),
            ('Royal Guard Cap', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/royal_guard_cap_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4, 'Princess Zeldas Room', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279452', 'None'),
            ('Rubber Helm', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/rubber_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Sarjon Woods Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282074', 'Shock Resistance'),
            ('Cap of the Sky', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_the_sky_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Depths', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280831', 'None'),
            ('Snowquill Headdress', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/snowquill_headdress_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Armor Shop Rito Village', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279409', 'Cold Resistance'),
            ('Soldiers Helm', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/soldiers_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4, 'Royal Hidden Passage', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280738', 'None'),
            ('Stealth Mask', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/stealth_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Armor Shop Kakariko Village', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279427', 'Stealth Up'),
            ('Cap of Time', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_time_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Depths', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280839', 'None'),
            ('Tingles Hood', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tingles_hood_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Eighth Heroine Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280872', 'None'),
            ('Cap of Twilight', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_twilight_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Gleeok Den', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280822', 'Attack Up'),
            ('Cap of the Wild', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_the_wild_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 7, 'Hebra Dark Skeleton', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280784', 'Attack Up'),
            ('Cap of the Wind', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_wind_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Tingel Island Chasm', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280268', 'Attack Up'),
            ('Yiga Mask', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/yiga_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 1, 'Great Plateau', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279437', 'Stealth Up'),
            ('Zonaite Helm', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zonaite_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4, 'Light Case Island', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279584', 'Energy Up'),
            ('Zora Helm', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zora_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Floating Scales Island', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279275', 'Swim Speed Up');
            
            INSERT INTO chest (chestName, chestURL, chestDefense, chestLocation, chestLocationURL, chestEffect)
            VALUES
            ('Tunic of Awakening', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_awakening_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Ancient Columns', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280855', 'None'),
            ('Barbarian Armor', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/barbarian_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Crenel Hills Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279638', 'Attack Up'),
            ('Charged Shirt','https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/charged_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Dracoxo Lake', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282578', 'Stormy Weather Charge'),
            ('Climbing Gear', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/climbing_gear_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Hyrule Plain Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=276862', 'Climb Speed Up'),
            ('Dark Tunic', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/dark_tunic_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Bargainer Statue', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277770', 'None'),
            ('Tunic of the Depth', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic-of-the-depths-armor-piece-zelda-tears-of-the-kingdom-wiki-guide-200px-min.png', 3, 'Bargainer Statue', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277770', 'Gloom Resistance'),
            ('Desert Voe Spaulder', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/desert_voe_spaulder_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 5, 'Gerudo Secert Club', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279713', 'Heat Resistance'),
            ('Ember Shirt', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/ember_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Goronbi River Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280706', 'Hot Weather Attack'),
            ('Evil Spirit Armor', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/evil-spirit-armor-armor-piece-zelda-tears-of-the-kingdom-wiki-guide-200px-min.png', 4, 'Lomei Labyrinth Island Prophecy', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280412', 'Stealth Up'),
            ('Fierce Dietys Armor', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/fierce_deitys_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 5, 'Citadel Ruins Summit Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280700', 'Attack Up'),
            ('Flamebreaker Armor', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/flamebreaker_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Armor Shop Goron City', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279416', 'Flame Guard'),
            ('Froggy Sleeve', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/froggy_sleeve_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Potential Princess Sightings', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277847', 'Slip Resistance'),
            ('Frostbite Shirt', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/frostbite_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Brightcap Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279996', 'Cold Weather Attack'),
            ('Glide Shirt', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/glide_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Courage Island', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277843', 'Skydive Mobility Up'),
            ('Tunic of the Hero', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_the_hero_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Depths', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280804', 'None'),
            ('Hylian Tunic', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/hylian_tunic_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Mubs Shop Lookout Landing', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279419', 'None'),
            ('Miners Top', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/miners_top_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Daphnes Canyon Mine', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279717', 'Glow'),
            ('Mystic Robe', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/mystic_robe_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Koltin Shop', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=281132', 'Rupee Padding'),
            ('Phantom Armor', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/phantom_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 8, 'Tamino River Downstream Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280846', 'Attack Up'),
            ('Radiant Shirt', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/radiant_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Armor Shop Kakariko Village', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279443', 'None'),
            ('Royal Guard Uniform', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/royal_guard_uniform_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4, 'Guards Chamber', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279453', 'None'),
            ('Rubber Armor', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/rubber_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Whistling Hill Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279731', 'Shock Resistance'),
            ('Tunic of the Sky', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_the_sky_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Depths', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280833', 'None'),
            ('Snowquill Tunic', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/snowquill_tunic_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Armor Shop Rito Village', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279409', 'Cold Resistance'),
            ('Soldiers Armor', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/soldiers_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4, 'Royal Hidden Passage', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280738', 'None'),
            ('Stealth Chest Guard', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/stealth_chest_guard_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Armor Shop Kakariko Village', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279427', 'Stealth Up'),
            ('Tunic of Time', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_time_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Depths', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280838', 'None'),
            ('Tingles Shirt', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tingles_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Dueling Peaks South Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280869', 'None'),
            ('Tunic of Twilight', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_twilight_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Rist Mine', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280819', 'Attack Up'),
            ('Tunic of the Wild', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_the_wild_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 7, 'Gerudo Dark Skeleton', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280785', 'Attack Up'),
            ('Tunic of the Wind', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_the_wind-armor-zelda-totk-wiki-guide.png', 3, 'Depths', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280798', 'Attack Up'),
            ('Yiga Armor', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/yiga_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 1, 'Akkala Ancient Tech Lab', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279438', 'Stealth Up'),
            ('Zonaite Waistguard','https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zonaite_waistguard_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4, 'Yansamin Shrine', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279590', 'Energy Up'),
            ('Zelm Armor', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zora_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Restoring the Zora Armor Quest', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279692', 'Swim Speed Up');
            
            INSERT INTO leg (legName, legURL, legDefense, legLocation, legLocationURL, legEffect)
            VALUES
            ('Trousers of Awakening', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_awakening_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Coliseum Ruins', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280868', 'None'),
            ('Barbarian Leg Wraps', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/barbarian_wraps_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Walnot Mountain Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279730', 'Attack Up'),
            ('Charged Trousers', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/charged_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3,'Damal Forest', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282577', 'Stormy Weather Charge'),
            ('Climbing Boots', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/climbing_boots_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Upland Zorana Byroad', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279677', 'Climb Speed Up'),
            ('Dark Trousers', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/dark_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Bargainer Statue', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279737', 'None'),
            ('Gaiters of the Depths', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/gaiters-of-the-depths-armor-piece-zelda-tears-of-the-kingdom-wiki-guide-200px-min.png', 3, 'Bargainer Statue', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279748', 'Gloom Resistance'),
            ('Desert Voe Trousers', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/desert_voe_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 5, 'Gerudo Secret Club', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279714', 'Heat Resistance'),
            ('Ember Trousers', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/ember_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Cephia Lake Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279831', 'Hot Weather Attack'),
            ('Evil Spirit Greaves', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/evil_spirit_greaves-armor-zelda-totk-wiki-guide.png', 4, 'North Lomei Prophecy', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280876', 'Stealth Up'),
            ('Fierce Deitys Boots', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/fierce_deitys_boots_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 5, 'Ancient Tree Stump', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279654', 'Attack Up'),
            ('Flamebreaker Boots', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/flamebreaker_boots_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Armor Shop Goron City', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279416', 'Flame Guard'),
            ('Froggy Leggings', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/froggy_leggings_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Potential Princess Sightings', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277847', 'Slip Resistance'),
            ('Frostbite Trousers', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/frostbite_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Hebra Headspring Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280711', 'Cold Weather Attack'),
            ('Glide Tights', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/glide_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Bravery Island', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279423', 'Skydive Mobility Up'),
            ('Trousers of the Hero', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_the_hero_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Depths', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280806', 'None'),
            ('Hylian Trousers', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/hylian_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Mubs Shop Lookout Landing', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279419', 'None'),
            ('Miners Trousers', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/miners_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Hylian Canyon Mine', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279724', 'Glow'),
            ('Mystic Trousers', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/mystic_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Koltin Shop', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=281132', 'Rupee Padding'),
            ('Phantom Greaves', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/phantom_greaves_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 8, 'Ancient Altar Ruins', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280848', 'Attack Up'),
            ('Radiant Tights', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/radiant_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Armor Shop Kakariko Village', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279443', 'None'),
            ('Royal Guard Boots', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/royal_guard_boots_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4, 'Kings Study', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279448', 'None'),
            ('Armor Tights', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/rubber_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Horon Lagoon Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282075', 'Shock Resistance'),
            ('Trousers of the Sky', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_the_sky_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Depth', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280829', 'None'),
            ('Snowquill Trousers', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/snowquill_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Armor Shop Rito Village', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279409', 'Cold Resistance'),
            ('Soldiers Greaves', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/soldiers_greaves_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4, 'Royal Hidden Passage', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280738', 'None'),
            ('Stealth Tights', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/stealth_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Armor Shop Kakariko Village', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279427', 'Stealth Up'),
            ('Trousers of Time', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_time_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Depths', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280835', 'None'),
            ('Tingles Tights', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tingles_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 2, 'Cape Cales Cliffbase Cave', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280875', 'None'),
            ('Trousers of Twilight', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_twilight_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Depths', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280816', 'Attack Up'),
            ('Trousers of the Wild', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_the_wild_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 7, 'Eldin Dark Skeleton', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280786', 'Attack Up'),
            ('Trousers of the Wind', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_wind_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Cresia Pit Mine', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279270', 'Attack Up'),
            ('Yiga Tights', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/yiga_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 1, 'Maritta Branch', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279436', 'Stealth Up'),
            ('Zonaite Shin Guard', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zonaite_shin_guards_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 4,'Sky Mine', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280286', 'Energy Up'),
            ('Zora Greaves', 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zora_greaves_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png', 3, 'Ancient Zora Waterworks', 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279700', 'Swim Speed Up');

            `).then(() => {
                console.log('DB seeded!')
                res.sendStatus(200)
            }).catch(err => console.log('error seeding DB', err))
    }
}