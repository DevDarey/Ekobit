    function multipleLetterCount(str){
        let letterObj = {};
        for(let i =0; i< str.length; i++){//ade
          if (!(str[i] in letterObj)){
            letterObj[str[i]] = 1;
          } else {
            letterObj[str[i]]++;
          }
        }
        return letterObj;
      }

