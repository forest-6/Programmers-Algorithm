function solution(n, left, right) {
  let answer = [];
  for(let i=left; i<=right; i++) {
    let y = parseInt(i/n);
    let x = i%n;
    answer.push(Math.max(y, x) + 1)
  }
  return answer;
}