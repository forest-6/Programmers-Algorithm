function solution(k, m, score) {
  score.sort((a,b)=>b-a)
  let arr = []
  for(let i=0; i<Math.floor(score.length/m)*m; i+=m){
    arr.push(score.slice(i,i+m))
  }
  return arr.reduce((acc,cur)=> acc + Math.min(...cur)*m, 0)
}