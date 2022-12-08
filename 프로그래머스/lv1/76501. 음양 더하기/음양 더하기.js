function solution(a, s) {
    return s.reduce((acc,cur,idx)=> acc + (cur ? a[idx] : -a[idx]) ,0)
}