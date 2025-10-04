function solution(progresses, speeds) {
    const ans = []
    
    let head = 0;
    let dayPass = Math.ceil((100 - progresses[0]) / speeds[0]);
    let workCount = 0;
    
    while(head < progresses.length) {
        const progress = progresses[head];
        
        // 며칠 일 해야 하는지
        const workDay = Math.ceil((100 - progresses[head]) / speeds[head]);
        
        // 일 해야하는 날짜가 현재 지난 날짜보다 작다면 카운트 증가
        if(workDay <= dayPass) {
            workCount++;
        } else {
            ans.push(workCount);
            dayPass = workDay;
            workCount = 1;
        }
        
        head++
    }
    ans.push(workCount);
    
    return ans;
}