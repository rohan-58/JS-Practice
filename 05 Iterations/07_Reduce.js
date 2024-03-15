//Mainly used in shopping cart (return all total value)
const nums = [1, 2, 3, 4, 5];

const myTotal = nums.reduce(function (accu, curr){
    console.log(`accumulator : ${accu} || currentvalue : ${curr}`)    //new accumulator = old accumulatr + current value
    return (accu+curr);
}, 0)    //this lastvalue indicated, from which value accumulator will start 

const total = nums.reduce((accu, curr) => {return (accu+curr)}, 0)   // reduce in arrow function

console.log(myTotal)
console.log(total)

let shoppingCart = [
    {
        itemName : "Galaxy F15",
        Price : 15000,
        Manufracturer : "Samsung",
    },
    {
        itemName : "G 52",
        Price : 15000,
        Manufracturer : "Motorola",
    },
    {
        itemName : "2a",
        Price : 22000,
        Manufracturer : "Nothing",
    }
]

const priceToPay = shoppingCart.reduce((accumulator, device) => accumulator + device.Price ,0)   //lets we have to add some taxes in all product,  then we will give the (tax %) in position of 0.
console.log(priceToPay)