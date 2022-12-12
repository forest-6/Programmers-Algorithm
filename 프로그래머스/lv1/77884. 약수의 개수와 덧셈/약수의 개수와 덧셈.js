function solution(l, r) {
  let range = []  
  for(let i=l;i<=r;i++) range.push(i)
  
  return range.reduce((acc,cur)=>{
    let divisor = []
    for(let i=1;i<=cur;i++){
      if (cur/i % 1 === 0) divisor.push(i)
    }
    return acc + (divisor.length % 2 ? -cur : cur)
  },0)
}