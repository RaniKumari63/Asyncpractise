function step1(value,callback)
{
    let result1=callback(value+10,false);
    step2(result1,function(result2,error)
    {
        if(!error)
        {
            return result2;
        }
    })
}