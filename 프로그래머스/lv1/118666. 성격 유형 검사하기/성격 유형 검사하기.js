function solution(survey, choices) {
  let mbti = {'R':0,'T':0,'C':0,'F':0,'J':0,'M':0,'A':0,'N':0}
  let types = ["RT","CF","JM","AN"];
  survey.forEach((v,i)=>{
    mbti[choices[i] > 4 ? v[1] : v[0] ] += Math.abs(choices[i] - 4);
  })

  return types.map(([a, b]) => mbti[b] > mbti[a] ? b : a).join("");
}