function solution(n, wires) {
    let min = Number.MAX_VALUE;
    const length = wires.length;
    
    for(let i = 0;i<n;i++) {
        const connections = Array.from({length: n + 1}, () => []);
        const visited = Array.from({length: n + 1}, () => false);
        
        for(let j = 0;j<length;j++) {
            if(j === i) continue;
            const [A, B] = wires[j];
            connections[A].push(B);
            connections[B].push(A);
        }
        
        let connectionCount = 0;
        
        function dfs(depth) {
            connectionCount++;
            visited[depth] = true;
            
            for(const connection of connections[depth]) {
                if(!visited[connection]) {
                    dfs(connection)
                }
            }
        }
        
        dfs(1);
        
        const gap = Math.abs(n - connectionCount * 2);
        min = Math.min(gap, min);
    }
    
    return min
}