function solution(n) {
    let nLen = n.toString(2).replaceAll(0,'').length;
    let i = n+1;
    while(true){
      if(nLen === i.toString(2).replaceAll(0,'').length) return i;
      i++;
    }
}