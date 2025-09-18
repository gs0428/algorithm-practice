function solution(maps) {
    let answer = -1;
    
    const N = maps.length;
    const M = maps[0].length;
    
    const visited = Array.from({length: N}, () => Array.from({length:M}, () => false));
    
    function bfs() {
        const queue = [[0, 0, 1]];
        visited[0][0] = true;
        
        while(queue.length > 0) {
            const [curX, curY, curCnt] = queue.shift();
            if(curX === M - 1 && curY === N - 1) {
                answer = curCnt;
            }
            
            if(curX < M - 1 && maps[curY][curX + 1] === 1 && !visited[curY][curX + 1]) {
                visited[curY][curX + 1] = true;
                queue.push([curX + 1, curY, curCnt + 1]);
            }
            if(curY < N - 1 && maps[curY + 1][curX] === 1 && !visited[curY + 1][curX]) {
                visited[curY + 1][curX] = true;
                queue.push([curX, curY + 1, curCnt + 1]);
            }
            if(curX > 0 && maps[curY][curX - 1] === 1  && !visited[curY][curX - 1]) {
                visited[curY][curX - 1] = true;
                queue.push([curX - 1, curY, curCnt + 1]);
            }
            if(curY > 0 && maps[curY - 1][curX] === 1  && !visited[curY - 1][curX]) {
                visited[curY - 1][curX] = true;
                queue.push([curX, curY - 1, curCnt + 1]);
            }
        }
    }
    
    bfs();
    
    return answer;
}