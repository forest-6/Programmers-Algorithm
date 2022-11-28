function solution(n)
{
  return Array.from(n+'').reduce((acc,cur)=>acc+Number(cur),0)
}