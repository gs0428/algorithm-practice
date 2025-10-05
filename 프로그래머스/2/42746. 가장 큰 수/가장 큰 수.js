function solution(numbers) {
    const zeroCount = numbers.reduce((acc,cur) => {
        if(cur === 0) acc += 1;
        return acc;
    },0)
    
    if(zeroCount === numbers.length) return '0';
    
    numbers.sort((a,b) => {
        const bStr = b.toString();
        const aStr = a.toString();
        
        if(bStr.length === aStr.length) {
            return bStr.localeCompare(aStr)
        }
        
        const newNum1 = Number(bStr + aStr);
        const newNum2 = Number(aStr + bStr);
        
        return newNum1 - newNum2
    })

    return numbers.join("")
}