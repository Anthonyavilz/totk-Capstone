// SELECT 
            
// a.armorset_id, a.armorname, a.helmArmor_id, a.chestArmor_id, a.legArmor_id,
// h.helm_id, helmname, h.helmurl, h.helmdefense, h.helmlocation, h.helmlocationurl, h.effect_id,
// c.chest_id, c.chestname, c.chesturl, c.chestdefense, c.chestlocation, c.chestlocationurl, c.effect_id,
// l.leg_id, l.legname, l.legurl, l.legdefense, l.leglocation, l.leglocationurl, l.effect_id,
// e.effect_id, e.effectname
 
// FROM armorset AS a
// JOIN helm AS h ON a.helmarmor_id = h.helm_id
// JOIN chest AS c ON a.chestarmor_id = c.chest_id
// JOIN leg AS l ON a.legarmor_id = l.leg_id
// JOIN specialeffects AS e ON h.effect_id = e.effect_id

// INSERT INTO specialEffects (effectName)
//             VALUES 
//             ('None'),
//             ('Attack Up'),
//             ('Charge Atk. Stamina Up'),
//             ('Disguise; Bone Weapon Prof.'),
//             ('Night Speed Up'),
//             ('Stormy Weather Charge'),
//             ('Climbing Jump Stamina Up'),
//             ('Gloom Attack Resist'),
//             ('Shock Damage Resist'),
//             ('Hot Weather Charge'),
//             ('Fireproof'),
//             ('Slip Resistance'),
//             ('Cold Weather Charge'),
//             ('Impact Proof'),
//             ('Shining Steps'),
//             ('Rupee Padding'),
//             ('Lightning Proof'),
//             ('Unfreezable'),
//             ('Swim Dash Stamina Up'),
//             ('Master Sword Beam Up'),
//             ('Energy Up');