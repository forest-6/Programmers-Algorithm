function solution(babbling) {
  const say = ["aya", "ye", "woo", "ma"]; 
  babbling.forEach((v1,i)=>{
    say.forEach(v2=>{
      if(v1.includes(v2.repeat(2))){
        babbling[i] = babbling[i].replaceAll(v2,'a')
      }
      else if(v1.includes(v2)){
        babbling[i] = babbling[i].replaceAll(v2,'1')
      }
    })
  })
  return babbling.filter(v=>v-0).length
}