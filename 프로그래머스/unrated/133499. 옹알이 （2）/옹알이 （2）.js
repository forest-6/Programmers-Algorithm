function solution(babbling) {
  let say = ["aya", "ye", "woo", "ma"];

  for(let i=0; i<babbling.length; i++){
    for(let j=0; j<say.length; j++){
      babbling[i] = babbling[i].replace('aya',1).replace('ye',2).replace('woo',3).replace('ma',4)
    }
  }
  return babbling.filter(v => v-0 && !v.includes('11') && !v.includes('22') && !v.includes('33') && !v.includes('44')).length
}