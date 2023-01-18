function solution(answers) {
  let answer = []
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  var one1 = answers.filter((a,i)=> a === one[i%one.length]).length;
    var two2 = answers.filter((a,i)=> a === two[i%two.length]).length;
    var three3 = answers.filter((a,i)=> a === three[i%three.length]).length;
    var max = Math.max(one1,two2,three3);

    if (one1 === max) {answer.push(1)};
    if (two2 === max) {answer.push(2)};
    if (three3 === max) {answer.push(3)};


    return answer;
}