function solution(m, n, puddles) {
    const arr = Array.from({length: n}, () => Array.from({length: m}, () => -1n));
    arr[0][0] = 1n;
    
    puddles.forEach(([x, y]) => {
        arr[y-1][x-1] = 0n;
    })
    
    for(let i = 1;i<m;i++) {
        if(arr[0][i] === 0n) continue;
        if(arr[0][i-1] === 0n) arr[0][i] = 0n;
        else arr[0][i] = 1n;
    }
    for(let i = 1;i<n;i++) {
        if(arr[i][0] === 0n) continue;
        if(arr[i-1][0] === 0n) arr[i][0] = 0n;
        else arr[i][0] = 1n;
    }
    
    for(let i = 1;i<n;i++) {
        for(let j = 1;j < m;j++) {
            if(arr[i][j] === 0n) continue;
            arr[i][j] = arr[i - 1][j] + arr[i][j-1];
        }
    }
    return Number(arr[n-1][m-1] % 1000000007n)
}
