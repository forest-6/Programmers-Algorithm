function solution(lottos, win_nums) {
  let rank = [6,6,5,4,3,2,1];
  let count = 0;
  let idk = 0;
  
  for(let i = 0; i < lottos.length; i++){
    if(lottos[i] == 0) idk++
    for(let j = 0; j < win_nums.length; j++){
      if(lottos[i] == win_nums[j]) count++
    }
  }

  return [rank[count + idk], rank[count]];
}