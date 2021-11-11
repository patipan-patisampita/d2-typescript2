let countries: string = "Thailand";
let province: string = "Trat";
//Pre-es6
let name1: string = countries + " My Country " + province + " My Province";
console.log(name1);
//Post-es6
let name2: string = `${countries} My Country ${province} My Province`;
console.log(name2);
