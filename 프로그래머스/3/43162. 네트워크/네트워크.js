function solution(n, computers) {
    const connections = Array.from({length: n}, () => [])
    const visited = Array.from({length: n}, () => false)
    
    let networkCount = 0;
    
    computers.forEach((matrix, idx) => {
        matrix.forEach((m, index) => {
            if(idx !== index) {
                if(m === 1) {
                    connections[idx].push(index);
                    connections[index].push(idx);
                }
            }
        })
    })
    
    function dfs(depth) {
        visited[depth] = true;
        
        for(const connection of connections[depth]) {
            if(!visited[connection]) {
                dfs(connection)
            }
        }
    }
    
    for(let i = 0;i<n;i++) {
        if(!visited[i]) {
            networkCount++;
            dfs(i) 
        }
    }
    
    return networkCount;
}
