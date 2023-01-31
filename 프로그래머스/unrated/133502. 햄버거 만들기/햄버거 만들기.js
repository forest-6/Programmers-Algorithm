function solution(ingredient) {
  let count = 0;
  let arr = [];
  ingredient.forEach(v => {
   arr.push(v)
   if(arr.slice(-4).join('')==='1231') { 
      count++;
      arr.splice(-4);
    } 
  })
  return count;
}