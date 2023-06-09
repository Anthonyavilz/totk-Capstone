console.log('JS connected successfully')

const baseURL = 'http://localhost:8760'

//Form Selections Query Selectors
const helmSelection = document.querySelector('#helmSelection')
const chestSelection = document.querySelector('#chestSelection')
const legSelection = document.querySelector('#legSelection')

//Form Query
const form = document.querySelector('#armorSelection')
const armorName = document.querySelector('#armorSetName')

// Card Display Query
const armorDisplay = document.querySelector('#armorSetTable')


//Form selection dropdowns
const getHelmOptions = () => {
    axios.get(`${baseURL}/helms`)
    .then((res) => {
        res.data.forEach(helms => {
            const helmOptions = document.createElement('option')
            helmOptions.setAttribute('value', helms['helm_id'])
            helmOptions.textContent = helms.helmname
            helmSelection.appendChild(helmOptions)
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

const getChestOptions = () => {
    axios.get(`${baseURL}/chestArmor`)
    .then((res) => {
        res.data.forEach(chests => {
            const chestOptions = document.createElement('option')
            chestOptions.setAttribute('value', chests['chest_id'])
            chestOptions.textContent = chests.chestname
            chestSelection.appendChild(chestOptions)
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

const getLegOptions = () => {
    axios.get(`${baseURL}/legArmor`)
    .then((res) => {
        res.data.forEach(legs => {
            const legOptions = document.createElement('option')
            legOptions.setAttribute('value', legs['leg_id'])
            legOptions.textContent = legs.legname
            legSelection.appendChild(legOptions)
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

// Armor Card
const createArmorCard = (armor) => {
    const newArmorCard = document.createElement('section')

    newArmorCard.innerHTML = `
        <p>${armor.armorname}</p>
        <img src=${armor.helmurl}>
        <p>Helm Name: ${armor.helmname}</p>
        <p>Base Defense: ${armor.helmdefense}</p>
        <p>Location:</p><a href="${armor.helmlocationurl}" target="_blank" rel="noopener noreferrer">${armor.helmlocation}</a>
        <p>Special Effect: ${armor.effectname}</p>
        <img src=${armor.chesturl}>
        <p>Chest Piece Name: ${armor.chestname}</p>
        <p>Base Defense: ${armor.chestdefense}</p>
        <p>Location:</p><a href="${armor.chestlocationurl}" target="_blank" rel="noopener noreferrer">${armor.chestlocation}</a>
        <p>Special Effect: ${armor.effectname}</p>
        <img src=${armor.legurl}>
        <p>Leg Piece Name: ${armor.legname}</p>
        <p>Base Defense: ${armor.legdefense}</p>
        <p>Location:</p><a href="${armor.leglocationurl}" target="_blank" rel="noopener noreferrer">${armor.leglocation}</a>
        <p>Special Effect: ${armor.effectname}</p>
        <button onclick='deleteArmor(${armor.armorset_id})'>Reset</button>
    `
    armorDisplay.appendChild(newArmorCard)

}

//Form Submission
const addArmorSet = (e) => {
    e.preventDefault()
    armorDisplay.innerHTML = ''

    let armorObj = {
        arName: armorName.value,
        hName: +helmSelection.value,
        cName: +chestSelection.value,
        lName: +legSelection.value
    }

    axios.post(`${baseURL}/armorSet`, armorObj)
        .then(res => {
            console.log(res.data)
            createArmorCard(res.data)
            helmSelection.value = '',
            chestSelection.value = ''
            legSelection.value = ''
            armorName.value = ''
        })
        .catch(err => {
            console.log(err)
        })
}

// Delete Instance of created Armor
const deleteArmor = (id) => {
    armorDisplay.innerHTML = ''
    axios.delete(`${baseURL}/armorSet/${id}`)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

// Edit Armor Functions
// const updateArmor = (id, type) => {
    //     console.log('upgrade armor hit')
    //     armorDisplay.innerHTML = ''
    //     axios.put(`${baseURL}/armorSet/${id}`, {type})
    //         .then(res => {
        //             console.log(res.data)
        //             createArmorCard(res.data)
        //         })
        //         .catch(err => {
            //             console.log(err)
            //         })
            // }
            
// Upgrade feature (needs to have a different data set pulled so that it can access the number on the data table
// without it changing it's actual data)
            
            


// event listeners 
getHelmOptions()
getChestOptions()
getLegOptions()
form.addEventListener('submit', addArmorSet)