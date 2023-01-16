function solution(array, commands) {
    let answer = [];
for(let i=0; i<commands.length; i++){
    let cut = array.slice(commands[i][0]-1,commands[i][1]);
    let align = cut.sort((a,b) => a-b); 
    let num = align.slice(commands[i][2]-1,commands[i][2])
    answer.push(num[0])
}
 return answer;
}