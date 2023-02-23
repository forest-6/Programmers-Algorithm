function solution(s) {
  if(s.length % 2 === 1) return 0;
  let answer = 0;
  let arr = s.split('');
  let map = {')':'(', '}':'{', ']':'['}
  for(let i=0; i<s.length; i++){
    let tf = true;
    let stk = [];
    for(let j=0; j<s.length; j++){
      if(arr[j]==='(' || arr[j]==='{' || arr[j]==='['){
        stk.push(arr[j]);
      }
      else{
        let last = stk.pop();
        if(last!==map[arr[j]]){
          tf = false;
          break;
        }
      }
    }
    if(tf) answer ++;
    arr.push(arr.shift());
  }
  return answer;
}