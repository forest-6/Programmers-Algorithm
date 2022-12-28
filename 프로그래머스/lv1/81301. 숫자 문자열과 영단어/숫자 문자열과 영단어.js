function solution(s) {
  let n = ['zero','one','two','three','four','five','six','seven','eight','nine']
  let answer= '';
  let str = '';
  for(let i=0; i<s.length; i++){
    if(!isNaN(s[i])) answer += s[i];
    else{
      str+=s[i]
      if(n.indexOf(str) != -1){
        answer += n.indexOf(str);
        str = '';
      }
    }
  }
  return Number(answer)
}