const totalPrice = 2999;
if(totalPrice > 4000)
{
    const discount = totalPrice * 10 / 100;
    console.log("Regular Price " + totalPrice);
    console.log("(You Have Win 10% Discount) With Discount: " + (totalPrice-discount));
}
else if(totalPrice >= 3000)
{
    const discount = totalPrice * 5 / 100;
    console.log("Regular Price " + totalPrice);
    console.log("(You Have Win 5% Discount) With Discount: " + (totalPrice - discount));
}
else
{
    console.log("Your Regular Price is: " + totalPrice)
}