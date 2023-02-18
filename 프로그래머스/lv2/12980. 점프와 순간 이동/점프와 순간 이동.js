function solution(n) {
  let ans = 0;
  while(n>=1){
    if(n%2===0) n/=2;
    else ans++, n--; 
  }
  return ans;
}