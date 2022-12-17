function solution(n, m) {
  let nArr = []
   for(let i=1; i<=n; i++){
      if(n%i===0)nArr.push(i)
   }
  let mArr = []
   for(let i=1; i<=m; i++){
      if(m%i===0)mArr.push(i)
   }
  console.log(nArr)
  let same = nArr.filter((v)=>mArr.includes(v))
  let max = same[same.length-1]
  return [max, (n/max)*(m/max)*max]
}