function solution(id_list, report, k) {
  let user = Array(id_list.length).fill(0);
  let answer = Array(id_list.length).fill(0);
  report = [...new Set(report)].map(v => v.split(' '));
  
  report.forEach(v => user[id_list.indexOf(v[1])]++);
  
  let blackLi = id_list.filter((_,i) => user[i] >= k);
  
  report.forEach(v => {
   if(blackLi.includes(v[1])) answer[id_list.indexOf(v[0])]++
  });
  
  return answer;
}