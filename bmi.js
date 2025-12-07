const weight = 72;
const heightfeet = 5;
const heightinch = 10;

const height = (heightfeet*0.3048) + (heightinch*0.0254);
const bmi = weight / (height * height);
console.log(bmi.toFixed(1));