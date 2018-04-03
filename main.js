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

class Trainer{
    constructor(){
        this.pokemon = []
    }

    all(){
        return this.pokemon
    }

    add(poke){
        this.pokemon.push(poke)
    }
}

let minhal = new Trainer()

axios.get("https://pokeapi.co/api/v2/pokemon/65/")
.then((response) => {
    let data = response.data
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

  axios.get("https://pokeapi.co/api/v2/pokemon/493/")
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


  axios.get("https://pokeapi.co/api/v2/pokemon/68/")
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


  }).catch((error) => {
      console.log(error)
    })

    console.log(minhal)
