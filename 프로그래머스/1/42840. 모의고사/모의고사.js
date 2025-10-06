function solution(answers) {
    let maxNum = 0;
    const ans = []
    
    const supo1AnsList = [1,2,3,4,5]
    const supo1AnsLength = supo1AnsList.length
    const supo1 = answers.reduce((acc, cur, idx) => {
        if(cur === supo1AnsList[idx % supo1AnsLength]) acc += 1;
        return acc;
    },0)
    maxNum = Math.max(supo1, maxNum);

    const supo2AnsList = [2, 1, 2, 3, 2, 4, 2, 5]
    const supo2AnsLength = supo2AnsList.length
    const supo2 = answers.reduce((acc, cur, idx) => {
        if(cur === supo2AnsList[idx % supo2AnsLength]) acc += 1;
        return acc;
    },0)
    maxNum = Math.max(supo2, maxNum);
    
    const supo3AnsList = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    const supo3AnsLength = supo3AnsList.length
    const supo3 = answers.reduce((acc, cur, idx) => {
        if(cur === supo3AnsList[idx % supo3AnsLength]) acc += 1;
        return acc;
    },0)
    maxNum = Math.max(supo3, maxNum);
    
    if(supo1 === maxNum) ans.push(1)
    if(supo2 === maxNum) ans.push(2)
    if(supo3 === maxNum) ans.push(3)
    
    return ans;
}