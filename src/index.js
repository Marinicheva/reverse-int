module.exports = function reverse (n) {
    let newNumber = Array.from(String(n)).reverse();

    let answer = '';
    
    for (let i = 0; i < newNumber.length; i++) {
        if (Number.isInteger(+newNumber[i]) ) {
            answer += newNumber[i];
        }        
    }
    console.log(answer);
    return +answer;
};
