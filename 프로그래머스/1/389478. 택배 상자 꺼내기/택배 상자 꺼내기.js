function solution(n, w, num) {
    let totalHeight = Math.floor(n % w === 0 ? n / w : n / w + 1);
    let cnt = 1;
    const boxes = Array.from({length: totalHeight}, (_,idx) => {
        const oneLineBoxes = Array.from({length: w}, (_,innerIdx) => {
            const num = w * idx + innerIdx + 1;
            if(num > n) return -1;
            return num;
        })
        if(idx % 2) {
            return oneLineBoxes.reverse()
        }
        return oneLineBoxes;
    })
    
    const targetFloor = Math.floor(num % w === 0 ? num / w - 1 : num / w);
    const index = boxes[targetFloor].indexOf(num);
    
    while(1) {
        if(boxes[totalHeight-1][index] === -1) {
            totalHeight--;
            continue;
        } else if(boxes[totalHeight-1][index] === num) {
            break;
        }
        cnt++;
        totalHeight--;
    }
    
    
    return cnt;
}