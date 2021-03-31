/**
 * Les fonction avec ARRAY
 */


// Créer un array numbers
const numbers = [1, 5, 4, 3, 2];

// Affiche array numbers
console.log(numbers);

// Ajoute un nombre à la fin de array numbers
numbers.push(6);
console.log(numbers);

// Enleve un nombre à la fin de numbers
numbers.pop();
console.log(numbers);

// Ajoute un nombre au debut de numbers
numbers.unshift(7);
console.log(numbers);

// Enleve un nombre au debut de numbers
numbers.shift();
console.log(numbers);

// Selectionner une plage
// console.log(numbers.slice(1, 3));
const plage = numbers.slice(2, 3);
console.log(plage);

// Faire du tri croissant dans le tableau
const triCroissant = numbers.sort((a, b) => {
    return a - b;
});

console.log(triCroissant);

// Faire du tri décroissant
const triDecroissant = numbers.sort((a, b) => {
    return b - a;
});

console.log(triDecroissant);