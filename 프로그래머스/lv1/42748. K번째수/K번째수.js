function solution(array, commands) {
    let answer = [];
    commands.forEach((_,i)=>{
        let cut = array.slice(commands[i][0]-1,commands[i][1]);
        let align = cut.sort((a,b) => a-b) 
        answer.push(align[commands[i][2]-1])
    })
    return answer;
}