function solution(skill, trees) {
  var answer = 0;
  for(let i=0; i<trees.length; i++){
    let flag = true;
    let skillArr = skill.split('');
    for(let j=0; j<trees.length; j++){
      if(!skillArr.includes(trees[i][j])) continue;
      if(trees[i][j] === skillArr.shift()) continue;
      flag = false;
    }
    if(flag)answer++ ;
  }
  return answer;
}