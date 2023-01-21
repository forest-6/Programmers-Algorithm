function solution(number, limit, power) {
  let lis = [1];
  for(let i = 2; i <= number; i++){
    let li = 0;
    for(let j = 1; j <= Math.sqrt(i); j++){
      if(i % j === 0) {
        li++;
        if(i / j != j) li++;
      }
    }
    lis.push(li);
  }
  return lis.reduce((a,c)=>a+(c>limit?power:c),0)
}