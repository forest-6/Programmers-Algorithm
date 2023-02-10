function solution(s){
  if(!s.length%2) return 0
  let answer = [];
  for(let i=0; i<s.length; i++){
    if(s[i] == answer[answer.length-1]) answer.pop();
    else answer.push(s[i]);
  }
  return answer.length ? 0 : 1;
}