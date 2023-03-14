function solution(n, k) {
  const isPrime = (num) => {
    if(num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
     if (num % i === 0) return false;   
    }
    return true;
  }
  return n.toString(k).split('0').filter(v => isPrime(Number(v))).length;
}