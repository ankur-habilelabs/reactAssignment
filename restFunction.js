function addition(...input){
    console.log(...input);
    let sum=0;
    input.forEach(element => {
        sum+=element.value;
    });
    console.log(sum);
}
addition(1,2,3);