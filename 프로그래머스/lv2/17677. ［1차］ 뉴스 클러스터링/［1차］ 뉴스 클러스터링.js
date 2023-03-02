function solution(str1, str2) {
  let ans = [0,0];
  let valid1 = validation(str1);
  let valid2 = validation(str2);
  valid1.forEach((v,i) => {
    if(valid2.includes(v)) {
      valid2.splice(valid2.indexOf(v),1);
      ans[0]++;
    }
  })  
  if(ans[0]===valid2.length) return 65536;
  ans[1] = valid1.length + valid2.length;
  return Math.floor(ans[0]/ans[1]*65536);
};

function validation(str){
  let arr = [];
  str = str.toUpperCase();
  for(let i=0; i<str.length-1; i++){
    arr.push(str[i]+str[i+1]);
  }
 return arr.filter(v => 65<=v.charCodeAt(0) && 95>=v.charCodeAt(0) && 65<=v.charCodeAt(1) && 95>=v.charCodeAt(1))
};