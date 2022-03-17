const arr={name:"ankur",age:20};
console.log(arr);
const copied={...arr,gender:"male"};
console.log(copied);
const {name, ...other}=copied;
console.log(name);
console.log(other);