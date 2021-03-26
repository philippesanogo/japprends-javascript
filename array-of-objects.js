// Creation d'un tableau d'elements d'objets sur les differents devices

const devices = [
	{name: "macos", price: 4000},
	{name: "windows", price: 3000},
	{name: "ipad", price: 2000},
	{name: "samsung", price: 1750}
];

// Affiche le tableau d'objets
console.log("Affiche le tableau d'objets:")
console.log(devices);


console.log('');

// Affiche le 3eme objet (ipad...)
console.log("Affiche le 3eme objet:");
console.log(devices[2]);

console.log('');

// Affiche le prix de l'ipad
console.log("Affiche le prix de l'ipad");
console.log(devices[2].price);

console.log('');

// Affiche tous les prix
console.log("Affiche tous les prix:");
for (let i = 0; i < devices.length; i++) {
	console.log(devices[i].price);
}


console.log('');

// Affiche le prix de macos seulement, sinon affiche --------- :)
console.log("Affiche le prix de macos seulement:");

for (let i = 0; i < devices.length; i++) {
	if (devices[i].name === "macos") {
		console.log(devices[i].price);
	} else {
		console.log("-----");
	}
}



