function solution(n) {
    var answer = 0;
    const limit = Math.sqrt(n);
    for(let i = 0;i <= limit; i++) {
        if(n % i === 0) {
            answer += i;
            if(limit !== i) answer += n / i;
        }
    }
    return answer;
}