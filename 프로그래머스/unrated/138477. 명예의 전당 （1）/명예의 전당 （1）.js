function solution(k, score) {
  let rank = [];
  let last = [];
  
  score.forEach(v=>{
    rank.push(v)
    rank.sort((a,b)=>a-b)
    last.push(Math.min(...rank.slice(-k)))
  });
    
  return last;
}