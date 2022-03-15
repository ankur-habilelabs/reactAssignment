var arrptn = {};
for (let i = 0; i < 3; i++) {
  let index = i;
  arrptn["fun" + i] = function () {
    console.log(index);
  };
}

arrptn["fun0"]();
arrptn["fun1"]();
arrptn["fun2"]();
