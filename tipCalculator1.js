function tipAmmount(billAmmount, service) {
    if (service == 'good') {
        let tipTotal = billAmmount * 0.2;
        console.log(tipTotal);
        return tipTotal;
    } else if (service == 'fair') {
        let tipTotal = billAmmount * 0.15;
        console.log(tipTotal);
        return tipTotal;
    } else {
        let tipTotal = billAmmount * 0.1;
        console.log(tipTotal);
        return tipTotal;
    }
    }
    tipAmmount(100, 'good')