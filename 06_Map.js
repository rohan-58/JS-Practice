const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//const numAddTen = nums.map((num) => num+10)     // call back function without name
//const numAddTen = nums.map((num) => {return num+10})     // call back function without name

// Here we can perform chaining (menas we can preform multiple method)
const numAddTen = nums.map((num) => num*10).map((num) => num+1).filter((num) => num>=40);

console.log(numAddTen)      //map automatically return value
