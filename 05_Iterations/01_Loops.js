//   For-Loops
for(let i=1;i<=10;i++){
    if(i == 5){
        //console.log(`${i} is the best number`);
    }
    //console.log(i);
}

for(let i=1;i<=10;i++){
    //console.log(`Outer-loop values are ${i}`);
    for (let j=1;j<=10;j++) {
        //console.log(`Inner-loop values are ${j}`);   // for every outer loop iner-loop will be printed
    }
}

////                    Break and Continue Keyword

for(let i=1;i<=20;i++){
    if(i == 5){
        //console.log(`Detected : ${i}`);
        break;   // This will break the loop, when if condition satisfies
    }
    //console.log(i);
    
}


for(let i=1;i<=20;i++){
    if(i == 5){
        //console.log(`Dertected : ${i}`);
       continue;   // This will skip the iteration if condition satisfies
    }
    //console.log(i);
    
}
