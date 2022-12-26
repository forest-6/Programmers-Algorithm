function solution(s, n) {
  return s.sort((a,b)=>{
      return a[n] < b[n] ? -1 : a[n] > b[n] ? 1 : a < b ? -1 : 1;
  })
}