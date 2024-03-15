/*
                Comparison Operator
 ==, >, <, >=, <=, !=, (===) this also checks the type, (!==) same as (===) but execute opposite task
*/

///////////////////////////////////         IF-ELSE     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

if(2 == '2'){  // JS automatcally typecast the datatypes, so (==) just verify the value
    console.log("Executed");
}else{
    console.log("Not Executed");
}

if(2 === '2'){   //  (===) verify value along with data type
    console.log("Executed");
}else{
    console.log("Not Executed");
}

//Implecit Scope (Short Hand Notation)
const balance = 1000;
if(balance > 500) console.log("You Can Enter");     //short hand code


/* 
                        Logical Operator
    AND (&&) , OR(||), NOT(!)    application same as other languages*/