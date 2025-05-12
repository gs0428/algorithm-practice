function solution(n, w, num) {
    const arr = Array.from({length: n}, (_,i) => i + 1);
    const floorArr = [];
    const totalFloor = n % w ? Math.ceil(n / w) : n / w;
    const targetFloor = num % w ? Math.floor(num / w) : num / w - 1;
    
    for(let i = 0;i < totalFloor; i++) {
        if(i === totalFloor - 1 && arr.length !== w) {
            arr.push(...Array.from({length: w - arr.length}, () => 0));
        }
        const slicedArr = arr.splice(0, w);
        if(i % 2) floorArr.push(slicedArr.reverse())
        else floorArr.push(slicedArr)
        
    }
    
    const targetIndex = floorArr[targetFloor].indexOf(num);
    
    const answer = floorArr.reduce((acc, cur) => {
        if(cur[targetIndex]) return acc += 1;
        return acc;
    }, 0)
    
    return answer - targetFloor;
}