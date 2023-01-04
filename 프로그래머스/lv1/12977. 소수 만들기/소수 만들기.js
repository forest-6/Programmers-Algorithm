function solution(n) {
  let arr = [];
    
  for(let i=0; i<n.length; i++){
    for(let j=i+1; j<n.length; j++){
      for(let k=j+1; k<n.length; k++){
        arr.push(n[i]+n[j]+n[k])
      }
    }
  }
    
  let answer = arr.filter((v)=>{
    for (let i = 2; i<= Math.sqrt(v); i++){
      if (v % i==0) return false
    } 
    return true
  })
  
  return answer.length
}