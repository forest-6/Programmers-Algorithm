function solution(progresses, speeds) {
  let arr = [], ans = [];
  let day, max = 0;
  progresses.forEach((v,i) => {
    day = 0;
    while(v<100) v+=speeds[i], day++;
    arr.push(day);
  })
  arr.forEach(v => {
    if(v > max) ans.push(1), max = v;
    else ans[ans.length-1]++;
  })
  return ans;
}