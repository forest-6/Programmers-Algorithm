function solution(s) {
  let answer = [], arr = [], i = 0;
  for(let j=1; j<s.length-2; j++){
    if(s[j] === '{') arr.push([]);
    else if(s[j] === '}') i++;
    else if(arr[i] && isNaN(s[j-1])) arr[i].push(s[j]);
    else if (s[j] !== ',') arr[i][arr[i].length-1] += s[j]
  }
  arr.sort((a,b) => a.length-b.length);
  arr.forEach(v => {
    v.forEach(v2 => {
      if(!answer.includes(v2-0))answer.push(v2-0);
    })
  })
  return answer;
}