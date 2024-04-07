fetch('http://api.github.com/users')
.then((response)=>response.json())
.then((result)=>console.log(result))
.then(()=>{
    console.log("hello");
})
.catch((res)=>console.log(res));