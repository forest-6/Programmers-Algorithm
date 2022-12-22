function solution(d, budget) {
     return d.sort((a,b)=>a-b).filter((v)=>{
      if(budget-v>=0){
        budget -= v;
        return v;
      }
    }).length
};