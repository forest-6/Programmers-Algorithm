function solution(brown, yellow) {
  for(let i=1; i<=yellow; i++){
    if(yellow % i === 0){
      let w = yellow/i+2;
      if(w*2 + i*2 === brown) return [w, i+2];
    }
  }
};