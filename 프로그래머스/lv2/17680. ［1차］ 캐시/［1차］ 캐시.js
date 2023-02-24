function solution(cacheSize, cities) {
    let ans = 0;
    let stk = [];
    cities = cities.map(v=>v.toLowerCase());
    
    for(let i=0; i<cities.length; i++){
      if(stk.includes(cities[i])) {
        ans += 1;
        stk.push(cities[i]);
        stk.splice(stk.indexOf(cities[i]),1)
      } 
      else {
         ans += 5;
         stk.push(cities[i]);
         if(stk.length>cacheSize) stk.shift();
      }
    }
    
    return ans;
}