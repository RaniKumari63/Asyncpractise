let stocks={
Flavours:["mango","strawberry","chocloate","cheesecake"],
Size:["small","medium","large"],
Ingredients:["flour","egg","butter","sugar"],
Theme:["princes","spiderman"]

}
let is_cake_order=true;
let order=(time,work)=>{

    return new Promise((resolve,reject)=>{

     if(is_cake_order)
     {
        setTimeout(()=>{
            resolve(work())
        },time)
     }
     else{
        reject(console.log("cake is not order"));
     }
    });

}

order(2000,()=>console.log("cake ordered start production "))
.then(()=>{

    return order(2000,()=>{
      console.log("production has been started")  
    })
})
.then(()=>{
    return order(2000,()=>{

        console.log(`${stocks.Flavours[0]} was selected`);
    })
})
.then(()=>
{
    return order(2000,()=>{
        console.log("Size has been selected");
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log(`${stocks.Ingredients[0] }and ${stocks.Ingredients[1]} has been selected`);
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Batter prepared and cake baked");
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Decoration added");
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Cake served");
    })
})
.catch(()=>
{
    console.log("customer left")
})
.finally(()=>{
    console.log("day ended ,shop is closed")
})