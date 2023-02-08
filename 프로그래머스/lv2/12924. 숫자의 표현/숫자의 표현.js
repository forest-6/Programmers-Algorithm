function solution(n) {
  let answer = 1;
  
  for(let i = 1; i < Math.ceil(n/2); i++){
    let sum = 0;
    for(let j = i; j <= Math.ceil(n/2); j++){
      sum += j;
      if(sum === n) {
        answer ++;        
        break;
      } 
      else if(sum > n) break;
    }
  }
  
  return answer;
}