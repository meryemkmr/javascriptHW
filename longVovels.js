function longLongVowels(word) {
      var longPhrase = word
        .replace(/aa/gi, "aaaa")
        .replace(/ee/gi, "eeee")
        .replace(/ii/gi, "iiii")
        .replace(/oo/gi, "oooo")
        .replace(/uu/gi, "uuuu");
    
      console.log(longPhrase);
    }
    longLongVowels("good");