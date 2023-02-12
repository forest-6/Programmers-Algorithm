function solution(n, words) {
    let stack = [];
    let count = 0;
  
    for(let i=0; i<words.length; i++){
      count ++;    
      if(stack.includes(words[i])){
        return [(i+1)%n?(i+1)%n:n,Math.ceil(count/n)]
      }
      else if(!words[i+1]) return [0,0]
      else if (words[i][words[i].length-1] !== words[i+1][0] ){
        return [(i+2)%n?(i+2)%n:n ,Math.ceil((count+1)/n)]
      }    
      stack.push(words[i]);
    }
}