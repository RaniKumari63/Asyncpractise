function step1(value,callback)
{
   callback(value+10,false);
}
function step2(value,callback)
{
    callback(value+10,true);
}
function step3(value,callback)
{
    callback(value,false);
}
step1(10,function(result1,error)
{
if(!error)
{
    step2(result1,function(result2,error)
    {
     if(!error)
     {
        step3(result2,function(result3,error)
        {
 console.log("result:"+result3);
        })
        {

        }
     }
    })
}
})
