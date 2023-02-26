function solution(clothes) {
  let obj = {};
  let arr = [];
  for(let i=0; i<clothes.length; i++){
    obj[clothes[i][1]] = 1;
  }
  for(let i=0; i<clothes.length; i++){
    obj[clothes[i][1]] += 1; 
  }
  for(let key in obj) arr.push(obj[key])
  
  return  arr.reduce((a,c) => a * c,1)-1
}