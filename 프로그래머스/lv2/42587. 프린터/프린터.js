
function solution(priorities, location) {
    let ans = 0;
    let arr = [];
    let list = priorities.map((v,i) => [v,i]);

    for(let i = 0; i < list.length ;){
        let j = list.shift();
        if( list.some((a)=> j[0]< a[0])) list.push(j);
        else {
            arr.push(j);
            if(arr[ans][1] == location) break;
            else ans ++;
        }
    }

    return ans+1;
}