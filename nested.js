const amount = 0;
if(amount > 400)
{
    console.log("Rich Man");
}
else
{
    if(amount > 100)
    {
        console.log("Not Rich and Not Middle Class");
    }
    else
    {
        if(amount > 0)
        {
            console.log("Middle Class")
        }
        else
        {
            console.log("Poor Man");
        }
    }
}