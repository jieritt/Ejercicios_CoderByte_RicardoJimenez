function SimpleAdding(num) { 
    // code goes here  
    return num === 0 ? 0 : num + SimpleAdding(num-1);            
  }

  console.log(SimpleAdding(4));
  