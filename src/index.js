module.exports = function toReadable (number) {
    let zeroToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    if(number < 20) {
        return zeroToTwenty[number];
    }  

    if(number < 100){
        return dvuznachniy(number);
    } 

    if(number < 1000) {
        let sotye = Math.floor(number/100);

        if(number % 100 === 0) {
            return zeroToTwenty[sotye] + ' hundred';
        }

        let decytue = dvuznachniy(number % 100);
        return zeroToTwenty[sotye] + ' hundred ' + decytue;
    }

    function dvuznachniy(n) {
        if(n % 10 === 0) {
            return tens[(n/10)-1];
        } 

        if(n < 20){
            return zeroToTwenty[n];
        }
        
        // if n > 20
        let firstTens = Math.floor(n/10)-1; //десятые
        let secondOnes = n % 10; //единицы
        return tens[firstTens] + ' ' + zeroToTwenty[secondOnes];   
    }
}
