console.log(document.title);


// 1.cambiar nombre a Generasion pokimon

let pokimon = document.querySelector('#gen-1');

pokimon.textContent = 'Generasión 1 Pokimon';

let backGen1 = document.getElementsByClassName('infocard-list infocard-list-pkmn-lg');

backGen1[0].style.backgroundColor = 'orange';

// 2 y 3 Mostrar por consola la URL y el Dominio

console.log(document.URL);

console.log(document.domain);

// 4. poner gif a las fotos de todos los pokemons-

let image = document.getElementsByTagName('img')

// console.log(image);

for (let i = 0; i < image.length; i++) {
    image[i].src=  "https://media.giphy.com/media/2v170e71aanfi/giphy.gif" 
};




// let voladores = document.querySelectorAll('.itype flying');

let type = document.querySelectorAll ('.infocard-lg-data')


for (let i = 0; i < type.length; i++){
   let pokemon = type[i].querySelector('small:last-child').children;
// console.log(pokemon);
    for(let j = 0; j < pokemon.length; j++){ 
        let volador = pokemon[j].innerHTML
    console.log(volador)
        if (volador == "Flying"){
            type[i].style.backgroundColor = " yellow"
        }
};
};








