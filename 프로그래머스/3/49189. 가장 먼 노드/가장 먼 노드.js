function solution(n, edge) {
    const connections = Array.from({length: n + 1}, () => [])
    const visited = Array.from({length: n + 1}, () => false)
    
    edge.forEach((e) => {
        const [A, B] = e;
        connections[A].push(B)
        connections[B].push(A)
    })
    
    let maxNum = 0;
    let total = 0;
    
    const queue = [[1, 0]]
    visited[1] = true;
    let head = 0;
    while(head < queue.length) {
        const [node, count] = queue[head];
        if(count === maxNum) {
            total++;
        }
        if(count > maxNum) {
            maxNum = count;
            total = 1;
        }
        
        for(const connection of connections[node]) {
            if(!visited[connection]) {
                visited[connection] = true;
                queue.push([connection, count + 1])
            }
        }
        head++;
    }
    
    return total
}