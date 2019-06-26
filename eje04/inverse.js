function FirstReverse(str) { 

    // code goes here  
    let inverse='';
    for(let i=str.length-1;i>=0;i--){
        inverse+=str[i];
    }
    return inverse;            
  }

  console.log(FirstReverse('anita lava la tina'));
  