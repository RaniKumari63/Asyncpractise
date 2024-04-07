let stocks={

Fruits:["strawberry","grapes","banana","apple"],
liquid:["water","ice"],
holder:["cone","cup","stick"],
toppings:["chocolate","peanuts"]

};

let order1=(Fruit_name,call_production1)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected `);
    },2000);
call_production1();
}


let order=(Fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    
        call_production();
    },2000);
   
   
};
let production1=()=>
{
    setTimeout(()=>{
        console.log("order received started production");
        setTimeout(()=>{
            console.log("the fruit has been chooped");
            setTimeout(()=>{},1000);
        },1000);
    },1000);
}
let production=()=>{

    setTimeout(()=>{
        console.log("order received started production");
        setTimeout(()=>{
            console.log("the fruit has been chopped");
 setTimeout(()=>
 {
console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
setTimeout(()=>{
console.log("The machine was started");
 setTimeout(()=>{

console.log(`${stocks.holder[0]}  ice cream was placed on cone`);
 setTimeout(()=>{
console.log(`${stocks.toppings[0]} topping are added`);

setTimeout(()=>{
console.log("serve ice cream");

},2000);
 },3000);
 },2000);

},1000);

},1000);

        },2000);
    },1000);
    
};

order(0,production);
