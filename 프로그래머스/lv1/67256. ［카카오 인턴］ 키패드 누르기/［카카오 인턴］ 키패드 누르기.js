function solution(numbers, hand) { 
    let answer = ''; 
    let key = {
        1: [1,1], 2: [1,2], 3: [1,3],
        4: [2,1], 5: [2,2], 6: [2,3],
        7: [3,1], 8: [3,2], 9: [3,3],
        0: [4,2]
    }
    
    let curL = [4,1]; 
    let curR = [4,3];
    
    numbers.forEach(v => {
        let loc = key[v];
      
        if(loc[1] === 1){
            curL = loc; 
            answer += 'L';
        } 
        else if(loc[1] === 3) {
            curR = loc; 
            answer += 'R';
        } 
        else {
            let disL = getDis(curL, loc);
            let disR = getDis(curR, loc);
            if(disL === disR) {
               if(hand === 'left') {
                    curL = loc;
                    answer += 'L';
                } 
               else { 
                    curR = loc;
                    answer += 'R'; 
                }
            } 
          
            else if(disL < disR){
                curL = loc; 
                answer += 'L'; 
            }
          
            else {
                curR = loc;
                answer += 'R';
            }
        }
    })
    return answer; 
}

function getDis(arr1, arr2){
    let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]); 
    return result; 
}