function solution(arr1, arr2) {
  let answer = [];
    for(let i=0; i<arr1.length; i++){ 
      answer.push(arr1[i].map((item,idx)=>{
         return item + arr2[i][idx];
      }))
    } 
  return answer;
}