function solution(s) {
  s = s.toLowerCase().split('')
  for(let i=0; i<s.length; i++){
    if(i == 0 || s[i-1] !== s[i-1].toUpperCase() || s[i-1] == ' '){
      s[i] = s[i].toUpperCase();
    }
  }
  return s.join('')
}