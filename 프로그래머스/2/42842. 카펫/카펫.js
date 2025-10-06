function solution(brown, yellow) {
    const ans = []
    const total = brown + yellow;
    
    for(let i = total; i >= Math.ceil(Math.sqrt(total)); i--) {
        if(total % i === 0) ans.push(i)
    }
    
    for(let i = ans.length - 1;i>=0;i--) {
        const width = ans[i];
        const height = total / width;
        
        const totalBrown = height * 2 + (width - 2) * 2;
        
        if(totalBrown === brown) {
            return [width, height]
        }
    }
    
}
