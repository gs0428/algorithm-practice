function solution(k, dungeons) {
    let answer = 1;
    const dungeonSize = dungeons.length;
    
    function swap(a, b) {
        [dungeons[b], dungeons[a]] = [dungeons[a], dungeons[b]];
    }
    
    function permutaion(depth, fatigue) {
        if(depth === dungeonSize) {
            answer = depth;
            return;
        }

        answer = Math.max(depth, answer)

        for(let i = depth;i < dungeonSize;i++) {
            swap(i, depth);
            if(fatigue >= dungeons[depth][0]) {
                permutaion(depth + 1, fatigue - dungeons[depth][1]);
            }
            swap(i, depth);
        }
    }   
    
    permutaion(0, k);
    
    return answer;
}
