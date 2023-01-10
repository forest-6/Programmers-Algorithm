function solution(s) {
    let arr = [];
    let result = [];

    for(let i = 0; i < s.length; i++){
        if(!arr.includes(s[i])){
            result.push(-1);
            arr.push(s[i]);
        }
        
        else if(arr.includes(s[i])){
            result.push(arr.length - arr.lastIndexOf(s[i]))        
            arr.push(s[i])
        }
    }
    return result;
}