function solution(today, terms, privacies) {  
  let term = {};
  let answer = [];
  terms.forEach(v => term[v.split(' ')[0]] = Number(v.split(' ')[1]));
  
  privacies = privacies.map(v => {
    return [v.split(' ')[0].replaceAll('.','-'), v.split(' ')[1]]
  });
  
  privacies.forEach((v,i) => {
    let date = new Date(v[0]);
    date.setMonth(date.getMonth() + term[v[1]]);
    if(date <= new Date(today.replaceAll('.','-'))) answer.push(i+1);
  });
  
  return answer;
}