function solution(citations) {
    const maxNum = Math.max(...citations);
    let ans = 0;
    
    for(let i = 0;i<=Math.ceil(maxNum/2);i++) {
        let used = 0;
        let unused = 0;
        
        for(const item of citations) {
            if(item >= i) {
                used++;
            } else if(item < i) {
                unused++;
            }
        }
        
        if(used >= i && unused < i) {
            ans = Math.max(i, ans)
        }
    }
    
    return ans
}