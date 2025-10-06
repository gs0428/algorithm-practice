function getSosu() {
    const sosuList = Array.from({length: 10000000}, () => true);
    sosuList[0] = false;
    sosuList[1] = false;
    
    for(let i = 2;i<=9999999;i++) {
        if(sosuList[i]) {
            for (let j = i * 2;j <= 9999999;j += i) {
                sosuList[j] = false;
            }
        }
    }
    
    return sosuList
}

function solution(numbers) {
    const sosu = getSosu();
    const length = numbers.length;
    const set = new Set();
    
    let temp;
    
    function permutation(depth) {
        if(temp.length === depth) {
            const num = +temp.join("");
            if(sosu[num]) {
                set.add(num)
            }
            
            return;
        }
        
        for (let i = depth; i < temp.length; i++) {
            [temp[depth], temp[i]] = [temp[i], temp[depth]];
            permutation(depth + 1);
            [temp[depth], temp[i]] = [temp[i], temp[depth]];
        }
        
    }
    
    function subset(arr, depth, size) {
        if(depth === length) {
            if(size === 0) return;
            
            // let str = ""
            temp = []
            for(let i = 0;i<size;i++) {
                temp.push(arr[i])
            }
            
            permutation(0)
            
            return;
        }
        
        arr[size] = numbers[depth]
        
        subset([...arr], depth + 1, size + 1)
        subset([...arr], depth + 1, size)
    }
    
    subset([], 0, 0);
    
    return set.size
}