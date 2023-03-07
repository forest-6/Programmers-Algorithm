function solution(k, d) {
  let visited = Array(d.length).fill(0);
  let ans = 0;
  const dfs = (k, cnt) => {
    ans = Math.max(ans, cnt);
    for(let i=0; i<d.length; i++){
      if(k>=d[i][0] && !visited[i]){
        visited[i] = 1;
        dfs(k-d[i][1], cnt+1);
        visited[i] = 0;
      }
    }
  }
  dfs(k,0)
  
  return ans;
}