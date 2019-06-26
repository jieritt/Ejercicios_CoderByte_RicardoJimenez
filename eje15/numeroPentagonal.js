function PentagonalNumber(num) { 

    // code goes here  
    
    return num <1?0 : (5*(num*num)-5*num+2)/2; 
           
  }

  console.log(PentagonalNumber(6));
  