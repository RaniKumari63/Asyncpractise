let stocks={
Flavours:["mango","strawberry","chocloate","cheesecake"],
Size:["small","medium","large"],
Ingredients:["flour","egg","butter","sugar"],
Theme:["princes","spiderman"]

}

let order=(Flavours_name,call_production)=>
{

    setTimeout(()=>{

console.log(`${stocks.Flavours[Flavours_name]} was selected`);
call_production();
    },2000)
}

let production=()=>
{
    setTimeout(()=>{

        console.log("order placed start production");
        setTimeout(()=>{
console.log("flavours has been selected");
setTimeout(()=>
{
    console.log("Size has been selected");
     setTimeout(()=>
     {
       console.log(`${stocks.Ingredients[0] }and ${stocks.Ingredients[1]} has been selected`);
       setTimeout(()=>{
        console.log("Batter prepared and cake baked");
        setTimeout(()=>{
            console.log("Decoration added");
            setTimeout(()=>{
                console.log("Cake served");
            },2000)
        },2000)
       },2000)
     },2000)
,2000})
        },2000)
    },2000)
}
order(0,production);