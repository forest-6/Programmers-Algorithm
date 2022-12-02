function solution(x) {
 let sum = x.toString().split('').reduce((acc,cur)=>{
   return acc + Number(cur)
 },0)
 return !(x/sum % 1)
}