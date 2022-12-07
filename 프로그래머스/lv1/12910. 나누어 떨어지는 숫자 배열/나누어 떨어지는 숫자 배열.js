function solution(arr, divisor) {
    let answer = arr.filter(item=>{
      return !(item%divisor)
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1]
}