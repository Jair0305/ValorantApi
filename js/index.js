let subMenuWeapons = document.querySelector('.weapons')
let subMenuAgents = document.querySelector('.agents')
let subMenuMaps = document.querySelector('.maps')
let divMaps = document.querySelector('.divMaps')
let divWeapons = document.querySelector('.divWeapons')
let divAgents = document.querySelector('.divAgents')

document.addEventListener("DOMContentLoaded", () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fcf265bc3amsh2573f41fc0ab23cp1c3563jsne158225dc97d',
            'X-RapidAPI-Host': 'valorant-agents-maps-arsenal.p.rapidapi.com'
        }
    };
    
    
    
    fetch('https://valorant-agents-maps-arsenal.p.rapidapi.com/arsenal/es-mx', options)
        .then(response => response.json())
        .then(response => {
            let data = response
            let weapons = data.weapons
            console.log(weapons)
            for(let i = 0; i < weapons.length; i++ ){
                let weapon = weapons[i]
                let li = document.createElement("li")
                let a = document.createElement("a")
                li.append(a) 
                a.textContent = weapon.weapon_name
                subMenuWeapons.appendChild(li)

            //     let card = `<div class="row">
            //     <div class="col s12 m6">
            //       <div class="card">
            //         <div class="card-image">
            //           <img src="images/sample-1.jpg">
            //           <span class="card-title">Card Title</span>
            //           <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            //         </div>
            //         <div class="card-content">
            //           <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            //         </div>
            //       </div>
            //     </div>
            //   </div>`

            //   document.getElementById('divWeapons').innerHTML = card;

                let divRow = document.createElement("div");
                divRow.classList.add('row')

                let divCol = document.createElement("div");
                divCol.classList.add("col s12 m6")

                let divCard = document.createElement("div");
                divCard.classList.add("card");

                let divCardImage = document.createElement("div");
                divCardImage.classList.add("card-image")

                let imgSample = document.createElement("img");
                imgSample.src = weapon.weapon_asset

                const cardTitle = document.createElement('span');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = weapon.weapon_name;

                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');

                const paragraph = document.createElement('p');

                divCardImage.appendChild(imgSample)
                divCardImage.appendChild(cardTitle)

                divCard.appendChild(divCardImage)
                cardContent.appendChild(paragraph)
                divCard.appendChild(cardContent)

                divCol.appendChild(divCard)

                divRow.appendChild(divCol)

                divWeapons.appendChild(divRow)
            }
        })
        .catch(err => console.error(err));

        fetch('https://valorant-agents-maps-arsenal.p.rapidapi.com/agents/es-mx', options)
            .then(response => response.json())
            .then(response => {
                let data = response
                let agents = data.agents
                console.log(agents)
                for(let i = 0; i < agents.length; i++ ){
                    let agent = agents[i]
                    let li = document.createElement("li")
                    let a = document.createElement("a")
                    li.append(a) 
                    a.textContent = agent.title
                    subMenuAgents.appendChild(li)

                    let divRow = document.createElement("div");
                    divRow.classList.add('row')

                    let divCol = document.createElement("div");
                    divCol.classList.add("col s12 m6")

                    let divCard = document.createElement("div");
                    divCard.classList.add("card");

                    let divCardImage = document.createElement("div");
                    divCardImage.classList.add("card-image")

                    let imgSample = document.createElement("img");

                    const cardTitle = document.createElement('span');
                    cardTitle.classList.add('card-title');
                    cardTitle.textContent = 'Card Title';

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');

                    const paragraph = document.createElement('p');

                    divCardImage.appendChild(imgSample)
                    divCardImage.appendChild(cardTitle)

                    divCard.appendChild(divCardImage)
                    cardContent.appendChild(paragraph)
                    divCard.appendChild(cardContent)

                    divCol.appendChild(divCard)

                    divRow.appendChild(divCol)

                    divAgents.appendChild(divRow)
                }
            })
            .catch(err => console.error(err));

    fetch('https://valorant-agents-maps-arsenal.p.rapidapi.com/maps/es-mx', options)
        .then(response => response.json())
        .then(response => {
            let data = response
            let maps = data.maps
            console.log(maps)
            for(let i = 0; i < maps.length; i++ ){
                let map = maps[i]
                let li = document.createElement("li")
                let a = document.createElement("a")
                li.append(a) 
                a.textContent = map.map_name
                subMenuMaps.appendChild(li)

                let divRow = document.createElement("div");
                divRow.classList.add('row')

                let divCol = document.createElement("div");
                divCol.classList.add("col s12 m6")

                let divCard = document.createElement("div");
                divCard.classList.add("card");

                let divCardImage = document.createElement("div");
                divCardImage.classList.add("card-image")

                let imgSample = document.createElement("img");

                const cardTitle = document.createElement('span');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = 'Card Title';

                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');

                const paragraph = document.createElement('p');

                divCardImage.appendChild(imgSample)
                divCardImage.appendChild(cardTitle)

                divCard.appendChild(divCardImage)
                cardContent.appendChild(paragraph)
                divCard.appendChild(cardContent)

                divCol.appendChild(divCard)

                divRow.appendChild(divCol)

                divMaps.appendChild(divRow)
            }
        })
        .catch(err => console.error(err));
});

