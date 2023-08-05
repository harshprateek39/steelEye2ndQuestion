  // my approch:::::::
  // step1 - i find the the word .
  // step2- i find the position of that word in htmlContent, then I mark the specific work
  // step3 i find another word from array to be marked , then i start searching for that word beyond previous marked position 
  // because if there is a repeating word then it should not be marked twice,
  // NOTE : user should enter words in serial order for my function to properly worked because it works also for repeating element,
  
  
    function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
      let modifiedWord=htmlContent;
        const highlightedContent = [];
        const  strts=[0];// used array because array is passed as reference and i can change its value from different function
        for (const position of plainTextPositions) {
          const { start, end } = position;
          const word = plainText.substring(start, end); // extraction words form plain text
          modifiedWord= replacePartOfWord(modifiedWord, word, '<mark>'+word+'</mark>',strts)// function to mark the words
      }

    return modifiedWord;
  }
 
  function replacePartOfWord(originalWord, partToReplace, replacementText,strts) {

    const position = originalWord.indexOf(partToReplace,strts[0]); 
    strts[0]=strts[0]+position+13+partToReplace.length;
    

    if (position !== -1) {
      const prefix = originalWord.slice(0, position);
      const suffix = originalWord.slice(position+partToReplace.length );
      return prefix + replacementText + suffix;
    } else {
      return originalWord; 
    }
  };
  
     const a= [
        
        {
            start: 3,
            end: 8,
        },
        {
          start:  18,
          end: 25,
      },
    ]

    const html="<p><span>Hi David<br><br>Energix: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the";
    const plaintxt="Hi David Energix: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the"
      console.log( "marked HTML--", highlightHTMLContent(html,plaintxt,a)
      );