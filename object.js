// creation objet stylo

const stylo = {
	couleur: "noir",
	corps: "plastique et metal",
	cartouche: "encre",
	ecrire: () => {console.log("permet d'écrire");},
	dessiner: () => {console.log("permet de dessiner");}
}

console.log(`Stylo:
- ${stylo.couleur}
- ${stylo.corps}
- ${stylo.cartouche}`);