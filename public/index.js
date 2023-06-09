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
        <p>${armor.helmname}</p>
        <p>${armor.helmdefense}</p>
        <button onclick'updateArmor(${armor.armorset_id}, "upgrade")'>Fairy Upgrade</button>
        <p>${armor.helmlocation}</p>
        <p>${armor.effectname}</p>
        <img src=${armor.chesturl}>
        <p>${armor.chestname}</p>
        <p>${armor.chestdefense}</p>
        <button onclick'updateArmor(${armor.armorset_id}, "upgrade")'>Fairy Upgrade</button>
        <p>${armor.chestlocation}</p>
        <p>${armor.effectname}</p>
        <img src=${armor.legurl}>
        <p>${armor.legname}</p>
        <p>${armor.legdefense}</p>
        <button onclick'updateArmor(${armor.armorset_id}, "upgrade")'>Fairy Upgrade</button>
        <p>${armor.leglocation}</p>
        <p>${armor.effectname}</p>
        <button onclick='deleteArmor(${armor.armorset_id})'>Reset</button>
    `
    armorDisplay.appendChild(newArmorCard)

}

// const displayArmor = (arr) => {
    
//     for(let i = 0; i < 1; i++){
//         console.log(arr[1])
//         createArmorCard(arr[1])
//     }
// }

// const getArmor = () => {
//     axios.get(`${baseURL}/armorSet`)
//         .then(res => {
//             console.log(res.data[i])
//             displayArmor(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

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

// Edit Armor Functions

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

const updateArmor = (id) => {
    armorDisplay.innerHTML = ''
    axios.put(`${baseURL}/armorSet/${id}`, {type})
        .then(res => {
            console.log(res.data)
            createArmorCard(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}





// event listeners 
getHelmOptions()
getChestOptions()
getLegOptions()
form.addEventListener('submit', addArmorSet)