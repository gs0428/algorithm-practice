function getPow(char) {
    if(char === "S") return 1;
    if(char === "D") return 2;
    return 3;
}

function solution(dartResult) {
    let head = 0;
    const ans = []
    
    let num = null;
    let pow = null;
    let price = 1;
    
    while(head < dartResult.length) {
        const cur = dartResult[head];
        if(num !== null && pow !== null && !isNaN(+cur)) {
            ans.push(Math.pow(num, pow) * price)
            num = null;
            pow = null;
            price = 1;
        }
        // 숫자일 때
        if(!isNaN(+cur)) {
            // num에 기존 숫자가 있다면 해당 점수는 10
            if(num !== null) num = 10;
            // 아니라면 일반 점수
            else num = +cur;
        // 상 기호인 경우
        } else if(cur === "*") {
            if(ans.length > 0) {
                ans[ans.length - 1] *= 2;
            } 
            price *= 2;
        } else if(cur === "#") {
            price *= -1
        // 점수의 배수
        } else {
            pow = getPow(cur)
        }
        head++;
    }
    ans.push(Math.pow(num, pow) * price)
    return ans.reduce((acc,cur) => acc + cur)
}