
class Pokemon{
    constructor(name,hp,attack,defense,abilities=[]){
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities
        this.name = name
    }

    addAbility(ability){
        this.abilities.push(ability)
    }
}

class MingKinhal{
    constructor(){
        this.pokemon = []
    }

    all(){
        return this.pokemon
    }

    add(poke){
        this.pokemon.push(poke)
    }

    get(name){
        for(let i = 0; i < this.pokemon.length; i++){
            if(name == this.pokemon[i].name){
                return this.pokemon[i]
            }
        }
    }

}

let minhal = new MingKinhal()
//https://pokeapi.co/api/v2/pokemon/65/
axios.get("https://raw.githubusercontent.com/mag166/personalPokedex/master/alakazamJSON.json")
.then((response) => {
    let data =  response.data
    let hp = document.getElementById("alakazam-hp")
    let attack = document.getElementById("alakazam-attack")
    let defense = document.getElementById("alakazam-defense")
    let abilities = document.getElementById("alakazam-abilities")



    let alakazam = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )

    data.abilities.forEach((item) => {
        alakazam.addAbility(item.ability.name)
        
        abilities.innerHTML += item.ability.name +"<br>"
    })

    minhal.add(alakazam)
    hp.innerHTML = alakazam.hp
    attack.innerHTML = alakazam.attack
    defense.innerHTML = alakazam.defense

}).catch((error) => {
    console.log(error)
  })
//https://pokeapi.co/api/v2/pokemon/493/
  axios.get("https://raw.githubusercontent.com/mag166/personalPokedex/master/arceusJSON.json")
.then((response) => {
    let data = response.data
    let hp = document.getElementById("arceus-hp")
    let attack = document.getElementById("arceus-attack")
    let defense = document.getElementById("arceus-defense")
    let abilities = document.getElementById("arceus-abilities")


    let arceus = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )

    data.abilities.forEach((item) => {
        arceus.addAbility(item.ability.name)
        abilities.innerHTML += item.ability.name +"<br>"
    })


    minhal.add(arceus)
    hp.innerHTML = arceus.hp
    attack.innerHTML = arceus.attack
    defense.innerHTML = arceus.defense

}).catch((error) => {
    console.log(error)
  })

//https://pokeapi.co/api/v2/pokemon/68/
  axios.get("https://raw.githubusercontent.com/mag166/personalPokedex/master/machampJSON.json")
  .then((response) => {
      let data = response.data
      let hp = document.getElementById("machamp-hp")
      let attack = document.getElementById("machamp-attack")
      let defense = document.getElementById("machamp-defense")
      let abilities = document.getElementById("machamp-abilities")


      let machamp = new Pokemon(
          data.name,
          data.stats[5].base_stat,
          data.stats[4].base_stat,
          data.stats[3].base_stat,
      )

      data.abilities.forEach((item) => {
          machamp.addAbility(item.ability.name)
          abilities.innerHTML += item.ability.name +"<br>"
      })


      minhal.add(machamp)
      hp.innerHTML = machamp.hp
      attack.innerHTML = machamp.attack
      defense.innerHTML = machamp.defense

      console.log(minhal.get("machamp"))


  }).catch((error) => {
      console.log(error)
    })

    console.log(minhal.get("machamp"))

    let button = document.getElementById("scroll")
    button.addEventListener("click", (event) => {
        let div = document.getElementById("alakazam")
        div.scrollIntoView({behavior: "smooth"});
    });

    let button2 = document.getElementById("scroll2")
    button2.addEventListener("click", (event) => {
        let div = document.getElementById("arceus")
        div.scrollIntoView({behavior: "smooth"});
    });

    let button3 = document.getElementById("scroll3")
    button3.addEventListener("click", (event) => {
        let div = document.getElementById("machamp")
        div.scrollIntoView({behavior: "smooth"});
    });


    let machamp = document.getElementById("machamp-pic")
    machamp.addEventListener("mouseover", function( event ) {   
        machamp.src = "machamp-shiny.png";
    })

    machamp.addEventListener("mouseout", function( event ) {   
        machamp.src = "machamp.png";
    })

    let arceus = document.getElementById("arceus-pic")
    arceus.addEventListener("mouseover", function( event ) {   
        arceus.src = "arceus-shiny.png";
    })

    arceus.addEventListener("mouseout", function( event ) {   
        arceus.src = "arceus.png";
    })

    let alakazam = document.getElementById("alakazam-pic")
    alakazam.addEventListener("mouseover", function( event ) {   
        alakazam.src = "alakazam-shiny.png";
    })

    alakazam.addEventListener("mouseout", function( event ) {   
        alakazam.src = "alakazam.png";
    })

    window.addEventListener("scroll", (event) => {
        
        if(window.scrollY > 500){
            let alakazamPic = document.getElementById("alakazam-pic")
            alakazamPic.style.animation = "fadeIn 0.6s forwards"
            
        }

        if(window.scrollY > 550){
            let alakazamHPLabel = document.getElementById("alakazam-hp-label")
            alakazamHPLabel.style.animation = "fadeIn 0.6s forwards"
            let alakazamHP = document.getElementById("alakazam-hp")
            alakazamHP.style.animation = "fadeIn 1.6s forwards"
            let alakazamAttackLabel = document.getElementById("alakazam-attack-label")
            alakazamAttackLabel.style.animation = "fadeIn 2.6s forwards"
            let alakazamAttack = document.getElementById("alakazam-attack")
            alakazamAttack.style.animation = "fadeIn 3.6s forwards"

            let alakazamDefenseLabel = document.getElementById("alakazam-defense-label")
            alakazamDefenseLabel.style.animation = "fadeIn 4.6s forwards"
            let alakazamDefense = document.getElementById("alakazam-defense")
            alakazamDefense.style.animation = "fadeIn 5.6s forwards"

            let alakazamAbilitiesLabel = document.getElementById("alakazam-abilities-label")
            alakazamAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
            let alakazamAbilities = document.getElementById("alakazam-abilities")
            alakazamAbilities.style.animation = "fadeIn 5.6s forwards"

            
        }

        if(window.scrollY > 1200){
            let arceusPic = document.getElementById("arceus-pic")
            arceusPic.style.animation = "fadeIn 0.6s forwards"
            
        }

        if(window.scrollY > 1250){
            let arceusHPLabel = document.getElementById("arceus-hp-label")
            arceusHPLabel.style.animation = "fadeIn 0.6s forwards"
            let arceusHP = document.getElementById("arceus-hp")
            arceusHP.style.animation = "fadeIn 1.6s forwards"
            let arceusAttackLabel = document.getElementById("arceus-attack-label")
            arceusAttackLabel.style.animation = "fadeIn 2.6s forwards"
            let arceusAttack = document.getElementById("arceus-attack")
            arceusAttack.style.animation = "fadeIn 3.6s forwards"

            let arceusDefenseLabel = document.getElementById("arceus-defense-label")
            arceusDefenseLabel.style.animation = "fadeIn 4.6s forwards"
            let arceusDefense = document.getElementById("arceus-defense")
            arceusDefense.style.animation = "fadeIn 5.6s forwards"

            let arceusAbilitiesLabel = document.getElementById("arceus-abilities-label")
            arceusAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
            let arceusAbilities = document.getElementById("arceus-abilities")
            arceusAbilities.style.animation = "fadeIn 5.6s forwards"
        }

        if(window.scrollY > 1900){
            let machampPic = document.getElementById("machamp-pic")
            machampPic.style.animation = "fadeIn 0.6s forwards"
            
        }

        if(window.scrollY > 1950){
            let machampHPLabel = document.getElementById("machamp-hp-label")
            machampHPLabel.style.animation = "fadeIn 0.6s forwards"
            let machampHP = document.getElementById("machamp-hp")
            machampHP.style.animation = "fadeIn 1.6s forwards"
            let machampAttackLabel = document.getElementById("machamp-attack-label")
            machampAttackLabel.style.animation = "fadeIn 2.6s forwards"
            let machampAttack = document.getElementById("machamp-attack")
            machampAttack.style.animation = "fadeIn 3.6s forwards"

            let machampDefenseLabel = document.getElementById("machamp-defense-label")
            machampDefenseLabel.style.animation = "fadeIn 4.6s forwards"
            let machampDefense = document.getElementById("machamp-defense")
            machampDefense.style.animation = "fadeIn 5.6s forwards"

            let machampAbilitiesLabel = document.getElementById("machamp-abilities-label")
            machampAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
            let machampAbilities = document.getElementById("machamp-abilities")
            machampAbilities.style.animation = "fadeIn 5.6s forwards"
        }
    })