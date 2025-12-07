const weight = 60;
const heightfeet = 5;
const heightinch = 10;

const height = (heightfeet*0.3048) + (heightinch*0.0254);
const bmi = weight / (height * height);
console.log(bmi.toFixed(1));

if(bmi < 18.5)
{
    console.log("underweight");
}
else if(bmi >= 18.5 && bmi <= 24.99)
{
    console.log("normal");
}
else if(bmi > 25 && bmi <= 29.9)
{
    console.log("overweight");
}
else
{
    console.log("you are obese");
}