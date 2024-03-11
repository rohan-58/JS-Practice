//{}   ----> Defines scope of that program, function, condition

var c = 500    //global scope

if(true){          //block scope or, local scope
    let a = 10
    const b = 50
    var c = 80    //if we don't user any datatype thealso it will behave as (var)
}

//console.log(a)  we can't print a because a is in local scope
//console.log(b)  we can't print a because a is in local scope
console.log(c)  // "c" can be printed, and which "c" is in last position syntactically that wll be printted here [That's reason why we always avoid (var)]


/*In browser when we check there global scope is different, but when we check it in code environment there will be different*/