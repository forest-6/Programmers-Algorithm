function solution(n, arr1, arr2) {
  arr1 = arr1.map((v)=> v.toString(2).padStart(n,'0'))
  arr2 = arr2.map((v)=> v.toString(2).padStart(n,'0'))
  return arr1.map((v,i)=> v.split('').map((v2,j)=>{
    return v2==0 && arr2[i].split('')[j]==0 ? ' ':'#'
  }).join('')) 
}