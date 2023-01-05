function solution(N, stages) {
  let arr = [];
  for(let i=1; i<=N; i++){
    arr.push([i, stages.filter(v=>v==i).length / stages.length])
    stages = stages.filter(v =>v!=i)
  };
  arr.sort((a,b)=>b[1]-a[1]);
  return arr.map(v=>v[0]); 
}