function solution(triangle) {
    if(triangle.length === 1) return triangle[0][0];
    const length = triangle.length
    
    let ans = 0;

    function dfs(depth, nums) {
        if(depth === 1) {
            ans = Math.max(...nums) + triangle[0][0]
            return;
        };
        
        const newArr = []
        for(let i = 0;i<depth;i++) {
            const maxNum = Math.max(nums[i], nums[i + 1])
            newArr.push(maxNum + triangle[depth - 1][i]);
        }
        dfs(depth - 1, [...newArr])
    }
    
    dfs(length - 1, triangle[length - 1])

    
    return ans
}