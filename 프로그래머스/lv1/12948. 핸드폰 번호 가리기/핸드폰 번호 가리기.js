function solution(num) {
  return Array(num.length-3).join("*")+num.slice(-4); 
}