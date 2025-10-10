function checkValidation(start, place) {
    const visited = Array.from({length: 5}, () => Array.from({length:5}, () => false))
    visited[start[1]][start[0]] = true;
    const queue = [start]
    let head = 0;
    let isValid = true;
    
    while(head < queue.length) {
        const [x, y, count] = queue[head];
        
        if(x > 0 && !visited[y][x-1] && count < 2) {
            if(place[y][x-1] === 'P') {
                isValid = false;
                break;
            }
            if(place[y][x-1] === 'O') {
                visited[y][x-1] = true;
                queue.push([x-1,y,count + 1]);
            }
        }
        if(y > 0 && !visited[y-1][x] && count < 2) {
            if(place[y-1][x] === 'P') {
                isValid = false;
                break;
            }
            if(place[y-1][x] === 'O') {
                visited[y-1][x] = true;
                queue.push([x,y-1,count + 1]);
            }
        }
        if(x < 4 && !visited[y][x+1] && count < 2) {
            if(place[y][x+1] === 'P') {
                isValid = false;
                break;
            }
            if(place[y][x+1] === 'O') {
                visited[y][x+1] = true;
                queue.push([x+1,y,count + 1]);
            }
        }
        if(y < 4 && !visited[y+1][x] && count < 2) {
            if(place[y+1][x] === 'P') {
                isValid = false;
                break;
            }
            if(place[y+1][x] === 'O') {
                visited[y+1][x] = true;
                queue.push([x,y+1,count + 1]);
            }
        }
        head++;
    }
    
    return isValid
}

function solution(places) {
    const ans = []
    
    places.forEach((place, idx) => {
        const participations = []
        let isValid = true;
        
        place.forEach((p, y) => {
            for(const x in p) {
                if(p[x] === 'P') {
                    participations.push([+x, y, 0])
                }
            }
        })
        
        for(const item of participations) {
            if(!checkValidation(item, place)) {
                isValid = false;
                break;
            }
        }
    
        if(isValid) {
            ans.push(1)
        } else {
            ans.push(0)
        }
    })
    
    return ans
}