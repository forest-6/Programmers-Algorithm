function solution(s){
let total = 0;
  Array.from(s.toLowerCase()).forEach((str) => {
    if(str === 'p'){
      total += 1
    } 
    else if(str === 'y'){
      total -= 1
    }
  });
  return !total
}