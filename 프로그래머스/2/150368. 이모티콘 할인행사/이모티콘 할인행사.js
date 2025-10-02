const percentages = [10, 20, 30, 40]
const size = percentages.length

function solution(users, emoticons) {
    const numbers = []
    
    let maxPrice = [];
    let maxEmoticonPlus = 0;
    
    function dfs(arr, depth) {
        if(depth === emoticons.length) {
            numbers.push(arr)
            return;
        }
        
        for(let i = 0; i < size; i++) {
            arr[depth] = [emoticons[depth], percentages[i]]
            dfs([...arr], depth + 1);
        }
    }
    dfs([], 0)

    numbers.forEach((number) => {
        let emoticonPlus = 0;
        let emoticonPrice = 0;
        
        users.forEach((user) => {
            let totalPrice = 0;
            const [userPercentage, userPrice] = user;
            
            number.forEach((n) => {
                const [price, percentage] = n;
                if(percentage >= userPercentage) {
                    totalPrice += price * (1 - percentage / 100)
                }
            })
            
            if(totalPrice >= userPrice) {
                emoticonPlus += 1;
            } else {
                emoticonPrice += totalPrice;
            }
        })

        
        if(emoticonPlus > maxEmoticonPlus) {
            maxEmoticonPlus = emoticonPlus;
            maxPrice = [emoticonPrice]
        } else if(emoticonPlus === maxEmoticonPlus) {
           maxPrice.push(emoticonPrice);
        }
    })
    
    var answer = [maxEmoticonPlus, Math.max(...maxPrice)];
    return answer;
}