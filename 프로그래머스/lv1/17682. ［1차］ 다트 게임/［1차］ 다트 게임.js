function solution(dartResult) {
  let score = [];
  let arr = dartResult.split('');
  
  arr.forEach((v,i)=>{
    if(Number(v + arr[i+1])) arr.splice(i,2,v + arr[i+1])
  });
  
  arr.forEach((v,i)=>{
    if(arr[i+1]=='S') score.push(v**1)
    if(arr[i+1]=='D') score.push(v**2)
    if(arr[i+1]=='T') score.push(v**3)
    if(arr[i+2]=='*'){
      score[score.length-1] = score[score.length-1]*2
      score[score.length-2] = score[score.length-2]*2
    }
    if(arr[i+2]=='#'){
      score[score.length-1] = score[score.length-1] * -1
    }
  });
  return score.reduce((acc,cur)=>acc+cur)
}