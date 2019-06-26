function LetterChanges(str) { 

  // code goes here  
  let abc = {'a':'b','b':'c','c':'d','d':'E','e':'f',
            'f':'g','g':'h','h':'I','i':'j','j':'k',
            'k':'l','l':'m','m':'n','n':'O','o':'p',
            'p':'q','q':'r','r':'s','s':'t','t':'U',
            'u':'v','v':'w','w':'x','x':'y','y':'z','z':'A'};
    str = str.toLowerCase();
    let tmp = '';
    for(let i=0;i<str.length;i++){            
        tmp += abc[str[i]] === undefined? str[i]:abc[str[i]];
    }
  return tmp; 
  }

  console.log(LetterChanges('Hola mundo!'));
  