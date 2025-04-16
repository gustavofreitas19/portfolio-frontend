
listaHerois = [
    {
        "superhero":"Batman", 
        "publisher":"DC Comics", 
        "alter_ego":"Bruce Wayne",
        "first_appearance":"Detective Comics #27",
        "characters":"Bruce Wayne"
    },
    {
        "superhero":"Superman", 
        "publisher":"DC Comics", 
        "alter_ego":"Kal-El",
        "first_appearance":"Action Comics #1",
        "characters":"Kal-El"
    },
    {
        "superhero":"Flash", 
        "publisher":"DC Comics", 
        "alter_ego":"Jay Garrick",
        "first_appearance":"Flash Comics #1",
        "characters":"Jay Garrick, Barry Allen, Wally West, Bart Allen"
    },
    {
        "superhero":"Green Arrow", 
        "publisher":"DC Comics", 
        "alter_ego":"Oliver Queen",
        "first_appearance":"More Fun Comics #73",
        "characters":"Oliver Queen"
    },
    
    {
        "superhero":"Spider Man", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Peter Parker",
        "first_appearance":"Amazing Fantasy #15",
        "characters":"Peter Parker"
    },
    {
        "superhero":"Captain America", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Steve Rogers",
        "first_appearance":"Captain America Comics #1",
        "characters":"Steve Rogers"
    },
    {
        "superhero":"Iron Man", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Tony Stark",
        "first_appearance":"Tales of Suspense #39",
        "characters":"Tony Stark"
    },
    {
        "superhero":"Thor", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Thor Odinson",
        "first_appearance":"Journey into Myster #83",
        "characters":"Thor Odinson"
    },
    {
        "superhero":"Hulk", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Bruce Banner",
        "first_appearance":"The Incredible Hulk #1",
        "characters":"Bruce Banner"
    },
    {
        "superhero":"Wolverine", 
        "publisher":"Marvel Comics", 
        "alter_ego":"James Howlett",
        "first_appearance":"The Incredible Hulk #180",
        "characters":"James Howlett"
    },
    
]


/* Usando map, crie uma lista com o alter_ego de todos os personagens */

const nomeHerois = listaHerois.map(function(heroi){
    return heroi.alter_ego
})
console.log(nomeHerois)


/* Usando reduce, retorne o tamanho total de caracteres de todos os first_appearance cujo o publisher é igual a "Marvel Comics"  */
const totalCaracteres = listaHerois.reduce(function(total, heroi){
    if(heroi.publisher === "Marvel Comics"){
        return total + heroi.first_appearance.length
    } else {
        return total
    }
}, 0) 
console.log(totalCaracteres)

/* Usando filter, imprima a lista apenas de personagens cujo o publisher é "DC Comics" */
const listaDC = listaHerois.filter(function(heroi){
    return heroi.publisher === "DC Comics"
}) 
console.log(listaDC) 

/* Usando sort, organize o vetor pelo tamanho do nome dos personagens (superhero) */
listaHerois.sort(function(a, b){
    if(a.superhero.length > b.superhero.length){
        return 1
    } else if(a.superhero.length < b.superhero.length){
        return -1
    } else {
        return 0
    }
})
console.log(listaHerois)