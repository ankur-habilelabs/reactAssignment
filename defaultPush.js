function put(no, noArr = []) {
    noArr.push(no);
    return noArr;
}

console.log(put('ankur'));
// -> ['no Car']
console.log(put('Sanadhya'));