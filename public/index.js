console.log('JS connected successfully')

const baseURL = 'http://localhost:8760'

//Form Selections Query Selectors
const helmSelection = document.querySelector('#helmSelection')
const chestSelection = document.querySelector('#chestSelection')
const legSelection = document.querySelector('#legSelection')


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





// event listeners 
getHelmOptions()
getChestOptions()
getLegOptions()