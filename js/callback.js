function one(call_two)
{
console.log("step1 complete please call step 2");
call_two();
}
function two()
{console.log("step2");

}
one(two);

