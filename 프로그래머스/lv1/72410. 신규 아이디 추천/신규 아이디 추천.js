function solution(new_id) {
  const SP = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', '{', ']', '}', ':', '?', ',', '<', '>', '/'];
  let lower = new_id.toLowerCase();
  let delSP = lower.split('').filter(v => !SP.includes(v)).join('');
  let delDot = delSP.split('').map((v, i) => {
    return v === '.' && delSP[i+1] === '.' ? '' : v
  }).join('').split('');
  let trimDot = dot => {
    if(dot[0]==='.') dot.shift();
    if(dot[dot.length-1]==='.') dot.pop() ;
  };
  
  if(delDot[0]==='.'||delDot[delDot.length-1]==='.') trimDot(delDot);
  
  if(delDot.length===0){
    delDot = ['a','a','a']
  }else if(delDot.length===1 || delDot.length===2){
    delDot.push(delDot[delDot.length-1].repeat(3-delDot.length))
  }else if(delDot.length>15){
    delDot = delDot.slice(0,15)
  };
  
  if(delDot[0]==='.'||delDot[delDot.length-1]==='.') trimDot(delDot);
  
  return delDot.join('');
}