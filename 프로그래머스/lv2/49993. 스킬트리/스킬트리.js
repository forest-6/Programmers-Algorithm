function solution(skill, trees) {
  var answer = 0;
  let stk = [];
  
  for(let i=0; i<trees.length; i++){
    stk.push([]);
    for(let j=0; j<trees.length; j++){
      if(skill.includes(trees[i][j])) stk[i].push(trees[i][j]);
    }
    stk[i] = stk[i].join('');
  }
  for(let i=0; i<stk.length; i++){
    if(stk[i]===skill.substring(0,stk[i].length)) answer++;
  }
  
  return answer;
}
