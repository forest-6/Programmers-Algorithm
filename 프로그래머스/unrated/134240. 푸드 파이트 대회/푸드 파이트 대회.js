function solution(food) {
  let answer = [0];
  for(let i=food.length-1; i>=1; i--){
    let n = Math.floor(food[i]/2)+1;
    answer.push(Array(n).join(i))
    answer.unshift(Array(n).join(i))
  }
  return answer.join('')
}