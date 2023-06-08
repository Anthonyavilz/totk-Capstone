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
        res.data.forEach(helm => {
            const helmOptions = document.createElement('option')
            helmOptions.setAttribute('value', helm['helmId'])
            helmOptions.textContent = helm.helmName
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
        res.data.forEach(chest => {
            const chestOptions = document.createElement('option')
            chestOptions.setAttribute('value', chest['chestId'])
            chestOptions.textContent = chest.chestName
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
        res.data.forEach(leg => {
            const legOptions = document.createElement('option')
            legOptions.setAttribute('value', leg['legId'])
            legOptions.textContent = leg.legName
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
        <p>${armor.armorSetName}</p>
        <img src=${armor.hImageUrl}>
        <p>${armor.helmName}</p>
        <p>${armor.hBaseDefense}</p>
        <button onclick='updateArmor(${armor.userId}, "helmUpgrade")'>Fairy Upgrade</button>
        <p>${armor.hSpecialEffect}</p>
        <img src=${armor.cImageUrl}>
        <p>${armor.chestName}</p>
        <p>${armor.cBaseDefense}</p>
        <button onclick='updateArmor(${armor.userId}, "chestUpgrade")'>Fairy Upgrade</button>
        <p>${armor.cSpecialEffect}</p>
        <p>${armor.cLocation}</p>
        <img src=${armor.lImageUrl}
        <p>${armor.legName}</p>
        <p>${armor.lBaseDefense}</p>
        <button onclick='updateArmor(${armor.userId}, "legUpgrade")'>Fairy Upgrade</button>
        <p>${armor.lSpecialEffect}</p>
        <p>${armor.lLocation}</p>
        <button onclick='deleteArmor(${armor.userId})'>Reset</button>
    `
    // can I use the same concept of adding the different ID's for each armor to dynamically delete just those certain pieces? or would
    // it be better to just do separate forms for them?
    
    armorDisplay.appendChild(newArmorCard)

}

const displayArmor = (arr) => {
    
    for(let i = 0; i < 1; i++){
        console.log(arr[i])
        createArmorCard(arr[1])
    }
}

const getArmor = () => {
    axios.get(`${baseURL}/armorSet`)
        .then(res => {
            console.log(res.data[i])
            displayArmor(res.data[1])
        })
        .catch(err => {
            console.log(err)
        })
}

//Form Submission
const addArmorSet = (e) => {
    e.preventDefault()
    armorDisplay.innerHTML = ''

    let armorObj = {
        arName: armorName.value,
        hName: helmSelection.value,
        cName: chestSelection.value,
        lName: legSelection.value
    }

    axios.post(`${baseURL}/armorSet`, armorObj)
        .then(res => {
            console.log(res.data)
            displayArmor(res.data)
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
        displayArmor(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const updateArmor = (id, type) => {
    armorDisplay.innerHTML = ''
    axios.put(`${baseURL}/armorSet/${id}`, type)
        .then(res => {
            displayArmor(res.data[1])
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