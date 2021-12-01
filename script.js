
let arr = [22, 33, 25, 47, 85, 41, 90];

arr.forEach(num => {
  if (String(num).search(/(2|4)/) === 0) {
      console.log(num);
  }
});


let n = 100;

for (let i = 2; i <= n; i++) {
    let flag = 1;
    if (i > 2 && i % 2 != 0)
    {
        for (let j = 3; j*j <= i ; j=j+2)
        {
            if (i%j==0)
            {
                flag=0;
                break;
            }
        }
    }
    else if (i != 2) {
        flag = 0;
    }
    if (flag==1) {
        console.log(i, "делители этого числа это: 1 и " + i);
    }
}
