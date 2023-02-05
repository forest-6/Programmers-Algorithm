function solution(A,B){
  B.sort((a,b)=>b-a);
  A.sort((a,b)=>a-b);
  return A.reduce((a,c,i) => a + c * B[i], 0);  
}