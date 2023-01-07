function solution(t, p) {
  let answer = 0;
  for(let i=0; i<t.length; i++){
    let n = t.slice(i,i+p.length)
    if(n.length == p.length && n<=p) answer ++
  };
  return answer;
}