function solution(str1, str2) {
  
  function validation(str){
    let arr = [];
    str = str.toUpperCase();
    for(let i=0; i<str.length-1; i++){
      arr.push(str[i]+str[i+1]);
    }
   return arr.filter(v => 'A'<=v[0] && 'Z'>=v[0] && 'A'<=v[1] && 'Z'>=v[1]);
  };
  
  let ans = [0,0];
  let valid1 = validation(str1);
  let valid2 = validation(str2);
  valid1.forEach((v,i) => {
    if(valid2.includes(v)) {
      valid2.splice(valid2.indexOf(v),1);
      ans[0]++;
    }
  })  
  ans[1] = valid1.length + valid2.length;
  return ans[0] === valid2.length  ? 65536 : Math.floor(ans[0]/ans[1]*65536);
};