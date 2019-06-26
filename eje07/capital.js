function LetterCapitalize(str) { 

    // code goes here  
    let arr = str.trim().split(' ');
    for(let i=0;i<arr.length;i++){
        let tmp = arr[i];
        arr[i] = tmp[0].toUpperCase() + tmp.substr(1,tmp.length);
    }
    
    return arr.join(' '); 
           
  }
  console.log(LetterCapitalize('hola mundo'));
  