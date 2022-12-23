function solution(s, n) {
    return s.split('').map((v)=>{
      let code = v.charCodeAt() 
      let caesar = code+n
      if(code===32)return v
      if(65<=code && code<=90){
        if(90<caesar)return String.fromCharCode(caesar-26)
        return String.fromCharCode(caesar)
      }
      if(97<=code && code<=122){
        if(122<caesar)return String.fromCharCode(caesar-26)
        return String.fromCharCode(caesar)
      }
    }).join('')
};