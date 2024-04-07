let stocks={

    Fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
    
    };
    
    let is_shop_open=true;
    let toppings_choice=()=>
    {
        return new Promises((resolve,reject)=>{

            setTimeout(()=>{resolve( console.log("which topping would you love")); },3000);
        });
    }
    async function kitchen()
    {
        console.log("a");
        console.log("c");
        console.log("b");
        await toppings_choice();
        console.log("d");
        console.log("e");
    }
    kitchen();
    console.log("doing the dishes");
    console.log("cleaning the tables");
    console.log("taking orders");




  
    
    