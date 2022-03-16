function sum(...args) {
    return args
      .filter(function (e) {
        return typeof e === 'string';
      })
      .reduce(function (prev, curr) {
        return prev + curr;
      });
  }
  
  let result = sum(10, 'Hi', null ,undefined, 20, undefined, 50, 70, ' there!'); 
  console.log(result);