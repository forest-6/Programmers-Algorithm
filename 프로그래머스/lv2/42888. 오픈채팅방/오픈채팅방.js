function solution(record) {
  let ans = [];
  let user = {};
  
  record.forEach(v => {
    const [state, id, name] = v.split(' ');
    if(name) user[id] = name;
  })
  record.forEach(v => {
    const [state, id] = v.split(' ');
    if(state === 'Enter') ans.push(`${user[id]}님이 들어왔습니다.`)
    else if(state === 'Leave') ans.push(`${user[id]}님이 나갔습니다.`)
  })
  
  return ans;
}