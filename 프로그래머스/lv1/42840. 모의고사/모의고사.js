function solution(answers) {
  let answer = []
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let rank = [0,0,0];
  
  answers.forEach((v,i)=>{
    if(v === one[i%one.length])rank[0]++
    if(v === two[i%two.length])rank[1]++
    if(v === three[i%three.length])rank[2]++
  });
  
  let max = Math.max(...rank);

  for(let i = 0; i < rank.length; i++) {
      if(max === rank[i]) answer.push(i+1);
  };
  
  return answer;
}