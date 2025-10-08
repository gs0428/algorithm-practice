function isPrime(num) {
    if(num < 2) return false;
    const mid = Math.ceil(Math.sqrt(num));
    for(let i = 3;i<= mid;i++) {
        if(num % i === 0) return false;
    }
    
    return true;
}

function getJinsoo(num, k) {
    let str = []
    while(num > 0) {
        str.push(num % k);
        num = Math.floor(num / k);
    }
    
    return str.reverse().join("");
}

function solution(n, k) {
    let cnt = 0;
    
    const jinsoo = getJinsoo(n, k);
    jinsoo.split("0").forEach(num => {
        if(isPrime(+num)) cnt++;
    })
    
    return cnt
}