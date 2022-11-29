function solution(n){
  return Array.from(n+'').map(
    (item)=>{return item-0}
  ).reverse()
}