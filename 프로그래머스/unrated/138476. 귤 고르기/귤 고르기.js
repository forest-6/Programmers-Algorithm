function solution(k, tangerine) {
  tangerine.sort((a,b)=>a-b);
  let arr = [], cnt = 0;
  tangerine.forEach((v,i) => {
    let last = arr.length-1;
    if(i===0) arr.push([v])
    else if(arr[last].includes(v)) arr[last].push(v);
    else arr.push([v]);
  })

  arr.sort((a,b)=>b.length-a.length);
  let sum = 0, i = 0;
  while(sum<k){
    sum += arr[i].length;  
    i++;
  } 
  return i;
}