function solution(s) {
  let w = s.map((v,i) => v[0]<v[1]? v[1]:v[0])
  let h = s.map((v,i) => v[0]<v[1]? v[0]:v[1])
  return Math.max(...w) * Math.max(...h)
}