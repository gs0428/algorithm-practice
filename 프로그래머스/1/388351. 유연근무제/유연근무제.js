function solution(schedules, timelogs, startday) {
    let cnt = 0;
    timelogs.forEach((time, index) => {
        const timeArr = time.map((t, idx)=>{
            const rest = (startday + idx) % 7;
            return {
                time: t,
                week: rest !== 0 && rest !== 6    
            }
        })
        const inTimeCount = timeArr.reduce((acc, cur) => {
            const time = schedules[index] + 10;
            let hour = Math.floor(time / 100);
            let minute = time % 100;
            if(minute >= 60) {
                hour += 1;
                minute -= 60;
            }
            const newTime = Number(`${hour}${minute.toString().padStart(2, '0')}`)
            const isInTime = newTime >= cur.time && cur.week;
            if(isInTime) return acc + 1;
            return acc;
        }, 0)
        if(inTimeCount === 5) cnt++;
    })
    
    return cnt;
}