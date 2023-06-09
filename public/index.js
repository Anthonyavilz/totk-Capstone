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
    // const newHelmCard = document.createElement('section')
    // newHelmCard.innerHTML = `
    //     <table>
    //         <tr>
    //             <td><img src=${armor.helmurl}></td>
    //             <td>
    //                 <p>Helm Name: ${armor.helmname}</p>
    //                 <p>Base Defense: ${armor.helmdefense}</p>
    //                 <p>Location:</p><a href="${armor.helmlocationurl}" target="_blank" rel="noopener noreferrer">${armor.helmlocation}</a>
    //                 <p>Special Effect: ${armor.helmeffect}</p>
    //             </td>
    //         </tr>
    //     </table>
    // `
    // const newChestCard = document.createElement('section')
    // newChestCard.innerHTML = `
    //     <table>
    //         <tr>
    //             <td><img src=${armor.chesturl}></td>
    //             <td>
    //                 <p>Chest Piece Name: ${armor.chestname}</p>
    //                 <p>Base Defense: ${armor.chestdefense}</p>
    //                 <p>Location:</p><a href="${armor.chestlocationurl}" target="_blank" rel="noopener noreferrer">${armor.chestlocation}</a>
    //                 <p>Special Effect: ${armor.chesteffect}</p>
    //             </td>
    //         </tr>
    //     </table>
    // `

    // const newLegCard = document.createElement('section')
    // newLegCard.innerHTML = `
    //     <table>
    //         <tr>
    //             <td><img src=${armor.legurl}></td>
    //             <td>
    //                 <p>Leg Piece Name: ${armor.legname}</p>
    //                 <p>Base Defense: ${armor.legdefense}</p>
    //                 <p>Location:</p><a href="${armor.leglocationurl}" target="_blank" rel="noopener noreferrer">${armor.leglocation}</a>
    //                 <p>Special Effect: ${armor.legeffect}</p>
    //             </td>
    //         </tr>
    //     </table>
    // `
    
    
    
    const newArmorCard = document.createElement('section')
    newArmorCard.setAttribute('class', 'createdSection')
    newArmorCard.innerHTML = `
        <table>
            <tr class="armorTitle">
                <td colspan="2"><h1>${armor.armorname}</h1></td>
            </tr>
            <tr>
                <td class='imgCell'><img src=${armor.helmurl}></td>
                <td class="listedItems">
                    <h4>${armor.helmname}</h4>
                    <h4>Base Defense: ${armor.helmdefense}</h4>
                    <h4>Location:</h4><a href="${armor.helmlocationurl}" target="_blank" rel="noopener noreferrer">${armor.helmlocation}</a>
                    <h4>Special Effect: ${armor.helmeffect}</h4>
                </td>
            </tr>
            <tr>
                <td class='imgCell'><img src=${armor.chesturl}></td>
                <td class="listedItems">
                    <h4>${armor.chestname}</h4>
                    <h4>Base Defense: ${armor.chestdefense}</h4>
                    <h4>Location:</h4><a href="${armor.chestlocationurl}" target="_blank" rel="noopener noreferrer">${armor.chestlocation}</a>
                    <h4>Special Effect: ${armor.chesteffect}</h4>
                </td>
            </tr>
            <tr>
                <td class='imgCell'><img src=${armor.legurl}></td>
                <td class="listedItems">
                    <h4>${armor.legname}</h4>
                    <h4>Base Defense: ${armor.legdefense}</h4>
                    <h4>Location:</h4><a href="${armor.leglocationurl}" target="_blank" rel="noopener noreferrer">${armor.leglocation}</a>
                    <h4>Special Effect: ${armor.legeffect}</h4>
                </td>
            </tr>
            <tr class='buttonRow'>
                <td colspan='2'><button onclick='deleteArmor(${armor.armorset_id})'>Reset</button></td>
            </tr>
        </table>
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