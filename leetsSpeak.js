



var myString ='I am a leet programmer'.toUpperCase()
var leetList =myString.split()
for(var i=0; i< myString.length; i++){
    if (leetList[i]== 'A'){
        leetList[i]= '4';

    }
    else if (leetList[i]=='E'){
        leetList[i]= '3';
    }
        
    else if (leetList[i]=='G'){
        leetList[i]= '6';
    }
    
    else if (leetList[i]=='I'){
        leetList[i]= '1';
    }
        
    else if (leetList[i]=='O'){
        leetList[i]= '0';
    }
    
    else if (leetList[i]=='S'){
        leetList[i]= '5';
    }
    
    else if (leetList[i]=='T'){
        leetList[i]= '7';
    }
    

}


var leetSentence = leetList.join()
console.log(leetSentence.toLowerCase())




// 9. Long-Vowels
// function longLongVowels(word) {
//   var longPhrase = word
//     .replace(/aa/gi, "aaaa")
//     .replace(/ee/gi, "eeee")
//     .replace(/ii/gi, "iiii")
//     .replace(/oo/gi, "oooo")
//     .replace(/uu/gi, "uuuu");

//   console.log(longPhrase);
// }
// longLongVowels("good");