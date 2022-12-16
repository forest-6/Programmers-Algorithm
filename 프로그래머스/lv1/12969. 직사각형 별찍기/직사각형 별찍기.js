process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let width = Array.from("*".repeat(a*b));
    for(let i=1; i<b; i++){
        width.splice((a*i)+i-1, 0, `\n`)
    }
     console.log(width.join(''))
});