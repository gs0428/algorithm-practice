function solution(today, terms, privacies) {
    const todayValue = today.split(".").reduce((acc, cur, idx) => {
        if(idx === 0) {
            return acc + +cur * 12 * 28;
        }
        if(idx === 1) {
            return acc + +cur * 28;
        }
        return acc + +cur;
    },0);
          
    const newTerms = {}
    terms.forEach(term => {
        const [key ,value] = term.split(" ")
        newTerms[key] = +value * 28;
    })
    
    const ans = []
    
    privacies.forEach((privacy, idx) => {
        const [date, type] = privacy.split(" ");
        
        const dateValue = date.split(".").reduce((acc, cur, idx) => {
            if(idx === 0) {
                return acc + +cur * 12 * 28;
            }
            if(idx === 1) {
                return acc + +cur * 28;
            }
            return acc + +cur;
        },0);
        
        const dateOfTerm = newTerms[type];

        if(dateValue + dateOfTerm <= todayValue) {
            ans.push(idx + 1)
        } 
    })
    
    
    return ans;
}