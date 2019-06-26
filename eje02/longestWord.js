function LongestWord(sen) { 

    // code goes here  
    let sep = sen.split(' ');
    sen='';
    for(let i=0;i<sep.length;i++){
        if(sep[i].length > sen.length){
            sen = sep[i];
        }
    }
    return sen;            
  }

  console.log(LongestWord("Argument goes here"));