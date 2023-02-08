function solution(n) {
  let answer = n>1 ? 1 : 0;
  
  for(let i = 0; i < Math.ceil(n/2); i++){
    let sum = 0;
    for(let j = i+1; j <= Math.ceil(n/2); j++){
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
