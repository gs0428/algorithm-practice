function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach(part => {
        const value = (map.get(part) || 0) + 1;
        map.set(part, value);
    })
    
    completion.forEach(comp => {
        const value = map.get(comp) - 1;
        map.set(comp, value);
    })
    
    let ans;
    map.forEach((val, key) => {
        if(val === 1) ans = key;
    });
    
    return ans;
}