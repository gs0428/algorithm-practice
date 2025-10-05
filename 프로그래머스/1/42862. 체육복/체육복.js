function solution(n, lost, reserve) {
    let ans = n;
    const used = Array.from({length: n + 2}, () => 0);
    
    reserve.forEach((res) => {
        const idx = lost.indexOf(res);
        
        // 여벌 있고 잃어버리지 않은 경우
        if(idx === -1) {
            used[res] = 1;            
        } else {
            // 여벌 있고 잃어버린 경우
            lost.splice(idx, 1);
        }
    })
    lost.sort((a,b)=>a-b)
    reserve.sort((a,b)=>a-b)
    
    lost.forEach((l) => {
        let canBorrow = false;
        
        for(const res of reserve) {
            if((l + 1 === res && used[l + 1] > 0) || (l - 1 === res && used[l - 1] > 0)) {
                if(l + 1 === res) used[l + 1]--;
                else used[l - 1]--;
                    
                canBorrow = true;
                break;
            }
        }
        
        if(!canBorrow) ans--;
    })
    
    return ans;
}