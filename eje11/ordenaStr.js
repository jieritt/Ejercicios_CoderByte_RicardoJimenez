function ordenaStr(str){
    let finalStr=str.trim().split('');    
    for(let i=0;i<finalStr.length;i++){      
        for(let j=0;j<(finalStr.length-i-1);j++)    {
            if(finalStr[j]>finalStr[j+1]){
                let tmp = finalStr[j];
                finalStr[j]=finalStr[j+1];                        
                finalStr[j+1]=tmp;
            }
        }
    }
    return finalStr.join('');
}

console.log(ordenaStr('hooplah'));
