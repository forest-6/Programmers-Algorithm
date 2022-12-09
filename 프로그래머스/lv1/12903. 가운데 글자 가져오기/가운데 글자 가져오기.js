function solution(s) {
  let ctr = Math.ceil(s.length/2)-1
  return s.slice(ctr, ctr + (s.length%2 ? 1:2))
}