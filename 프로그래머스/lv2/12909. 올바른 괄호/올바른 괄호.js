function solution(s){  
  let count = 0;
  if(s[0] === ')' || s[s.length-1] === '(') return false;
  for(let i=0; i<s.length; i++){
    if(count < 0) return false; 
    else if(s[i] === '(') count+=1;
    else if(s[i] === ')') count-=1;
  }
  return 0 < count ? false : true;
}