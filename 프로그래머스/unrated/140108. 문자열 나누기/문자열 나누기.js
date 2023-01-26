function solution(s) {
  let answer = 0;
  let count = 0;
  let target;
  for(let i=0; i<s.length; i++){
    if(count === 0){
      answer ++;
      count = 1;
      target = s[i];
    }
    else{
      if(target===s[i]) count++
      else count--
    }
  }
  return answer
}