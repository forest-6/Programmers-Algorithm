function solution(a, b, n) {
  let remain, receive;
  let result = 0;
  let total = n;
  for(let i=0; i<n; i++){   
    if(total<a){
      return result
    }
    else{
      remain = total%a;
      receive = Math.floor(total/a)*b;
      result += receive
      total = remain + receive
    }
  }
  return result
}