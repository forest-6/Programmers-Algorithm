function solution(num) {
  let answer = 0;
  for(let i=0; i<10; i++){
    answer += !num.includes(i) ? i : 0
  }
  return answer;
}