

function solution(k, dungeons) {
    let answer = 0;
    const dungeonSize = dungeons.length;
    
    function swap(a, b) {
        [dungeons[b], dungeons[a]] = [dungeons[a], dungeons[b]];
    }
    
    function calculateFatigue() {
        let currentFatigue = k;
        let i = 0;
        for(i;i<dungeonSize;i++) {
            if(currentFatigue >= dungeons[i][0]) {
                currentFatigue -= dungeons[i][1]
            } else if(currentFatigue < dungeons[i][0]) {
                break;
            }
        }
        answer = Math.max(i, answer)
    }
    
    function permutaion(depth, fatigue) {
        if(depth === dungeonSize) {
            return;
        }

        calculateFatigue()
        
        for(let i = depth;i < dungeonSize;i++) {
            swap(i, depth);
            permutaion(depth + 1, fatigue - dungeons[i][1]);
            swap(i, depth);
        }
    }   
    
    permutaion(0, k);
    
    console.log(answer);
    
    return answer;
}
