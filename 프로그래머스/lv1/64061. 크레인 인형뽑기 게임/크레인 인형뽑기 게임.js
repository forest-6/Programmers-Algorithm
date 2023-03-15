function solution(board, moves) {
  let arr1 = [], arr2 = [];

  for (let i=0; i<moves.length; i++) {
    for (let j=0; j<board.length; j++) {
      if (board[j][moves[i]-1] !== 0) {
        arr1.push(board[j][moves[i]-1]);
        board[j].splice([moves[i]-1],1,0)
        break;
      }
    }        
  }

  for (let i=0; i<arr1.length; i++) {
    if (arr1[i] === arr1[i-1]) {
      arr2.push(arr1[i]);
      arr1.splice(i-1,2);
      i-=2;
    }
  }

  return arr2.length*2;
}