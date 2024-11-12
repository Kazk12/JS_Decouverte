// Crée 2 variables et donner la valeur de chaque variable à l'autre

let variable1 = 5;
let variable2 = 9;

let variable3 = variable2;
variable2 = variable1;
variable2 = variable3;

console.log(`Variable2 : ${variable2}`);
console.log(`Variable1 : ${variable1}`);


// 

let h = "h";
let e = "e";
let l = "l";
let o = "o";
let w = "w";
let r = "r";
let d = "d";

// console.log(h +'\n' +e+'\n'+l+'\n'+l+'\n'+o+'\n'+'\n' +w+'\n'+o+'\n'+r+'\n'+l +'\n'+d + "\n" + "!");
console.log(`\n ${h} \n ${e} \n ${l} \n ${l} \n ${o} \n\n ${w} \n ${o} \n ${r} \n ${l} \n ${d} \n !`);



// If majeur ou mineur

let age = 18

if(age >= 18){
    console.log(`Vous etes majeur`);
}else{
    console.log(`Vous etes mineur`);
}




// Exercice 1 Objectif : Se familiariser avec les sorties dans la console.
// Afficher "Hello, world !" dans la console.
// Afficher ensuite "Bienvenue dans le monde de la programmation !".

console.log("Hello, world !");
console.log("Bienvenue dans le monde de la programmation !");



// Exercice 2 Objectif : Manipuler les variables et les afficher.
// Déclare une variable nombre1 avec la valeur 5 et une variable nombre2 avec la valeur 10.
// Affiche la somme de ces deux nombres dans la console.

let nbr1 = 5;

let nbr2 = 10;

console.log(`${nbr1 + nbr2}`);



// Exercice 3 Objectif : Manipuler les tableaux et afficher les éléments un par un.
// Crée un tableau avec trois fruits de ton choix (par exemple, ["pomme", "banane", "cerise"]).
// Utilise une boucle pour afficher chaque fruit dans la console.

let tab = ["pomme", "cerice", "poire"];

for(let i = 0; i<tab.length; i += 1){
    console.log(tab[i])
};



// Exercice 4  Objectif : Utiliser des conditions simples et une boucle.
// Affiche tous les nombres pairs de 1 à 20 dans la console.

for(let i = 0; i <= 20; i++){
    if(i % 2){
        console.log(i)
    }
};



// Exercice 5 Objectif : Manipuler les chaînes de caractères et compter des éléments.
// Dans une constante, stockez un mot.
// La suite de votre algo va compter et afficher le nombre de voyelles dans le mot (a, e, i, o, u).



const mot = "Academia";

for(let i = 0; i = mot.length; i++){
    
}


// Exercice 6 Objectif : Pratiquer les boucles et la manipulation des chaînes de caractères.
// Stockez une phrase dans une constante.
// Compte combien de fois chaque lettre apparaît dans la phrase.
// Affiche chaque lettre avec son nombre d’occurrences (par exemple, "a : 3 fois").





// Exercice 7 Objectif : Utiliser des conditions pour trier des éléments dans deux groupes.
// Crée un tableau contenant plusieurs nombres positifs et négatifs.
// Utilise une boucle pour séparer les nombres positifs et les nombres négatifs dans deux nouveaux tableaux.
// Affiche ces deux tableaux.




// Exercice 8 Objectif : Utiliser des boucles et des conditions pour trouver une valeur.
// Saisissez une liste de 5 nombres.
// Parcoure cette liste pour déterminer et afficher le plus grand nombre.






// Exercice 9 Objectif : Utiliser les boucles et les manipulations de chaînes.
// Saisissez un mot.
// Affiche ce mot en inversant l'ordre des lettres (par exemple, "bonjour" deviendrait "ruojnob").