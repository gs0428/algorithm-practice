function solution(id_list, report, k) {
    const n = id_list.length;
    
    const userList = {}
    id_list.forEach(id => {
        userList[id] = {
            email: 0,
            reported: 0,
            reportedUser: []
        }
    })
    
    const stopedUsers = []
    
    report.forEach((user) => {
        const [A, B] = user.split(" ")
        // A가 B를 신고함
        if(!userList[B].reportedUser.includes(A)) {
            userList[B].reportedUser.push(A)
            if(++userList[B].reported === k) {
                stopedUsers.push(B)
            }   
        }
    })
    
    stopedUsers.forEach((user) => {
        userList[user].reportedUser.forEach((report) => {
           userList[report].email++ 
        })
    })
    
    return id_list.map(id => userList[id].email)
}