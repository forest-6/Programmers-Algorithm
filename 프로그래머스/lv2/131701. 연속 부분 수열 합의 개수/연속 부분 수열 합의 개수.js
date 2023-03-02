function solution(el) {
  let list = [...el,...el], ans = [];
  for(let i=0; i<el.length; i++){
    for(let j=1; j<el.length; j++){
      ans.push(list.slice(i,j+i).reduce((a,c)=>a+c,0));
    }
  }
  return [...new Set(ans)].length+1;
}