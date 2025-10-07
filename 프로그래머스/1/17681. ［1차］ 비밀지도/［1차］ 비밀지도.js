function getBinary(num, n) {
    let binary = "";
    while(num > 0) {
        binary += (num % 2).toString();
        num = Math.floor(num / 2);
    }
    return binary.padEnd(n, "0").split("").reverse().join("");
}

function solution(n, arr1, arr2) {
    const ans = []
    for(let i = 0;i<n;i++) {
        const arr1Binary = getBinary(arr1[i], n)
        const arr2Binary = getBinary(arr2[i], n)
        
        let str = ""
        for(let j = 0;j<n;j++) {
            if(arr1Binary[j] === "1" || arr2Binary[j] === "1") {
                str += "#"
            } else {
                str += " "
            }
        }
        ans.push(str)
    }

    return ans;
}