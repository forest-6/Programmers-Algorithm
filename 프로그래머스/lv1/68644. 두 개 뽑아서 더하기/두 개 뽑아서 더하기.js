function solution(n) {
  let answer = []
    for(let i=0; i<n.length; i++){
      for(let j=i+1; j<n.length; j++){
        answer.push(n[i]+n[j])
      }
    }
  return Array.from(new Set(answer.sort((a,b)=>a-b)))
}