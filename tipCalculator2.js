function tipAmmount(billAmmount, service) {
    if (service == 'good') {
        let tipTotal = billAmmount * 0.2;
        let total = billAmmount + tipTotal
        console.log(total);
        return total;
    } else if (service == 'fair') {
        let tipTotal = billAmmount * 0.15;
        let total = billAmmount + tipTotal
        console.log(total);
        return total;
    } else {
        let tipTotal = billAmmount * 0.1;
        let total = billAmmount + tipTotal
        console.log(total);
        return total;
    }
    }
    tipAmmount(100, 'good')