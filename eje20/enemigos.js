function enemigoCercano(arrStr){
    let enemy='',bot='';
    for(let i=0;i<arrStr.length;i++){
        let tmp1 = arrStr[i].indexOf('1');
        let tmp2 = arrStr[i].indexOf('2');

        if(tmp1!==-1 && bot ===''){
            bot = [tmp1,i];
            
        }
        if(tmp2!==-1 && enemy ===''){
            enemy = [tmp2,i];
            
        }
    }
    if(enemy !==''){

        if(bot[1] === enemy[1]){
            return Math.abs(bot[0]-enemy[0]);
        }else{
            
            return (Math.abs(bot[1]-enemy[1])-1)+Math.abs(bot[0]-enemy[0]);
        }
    }
    return 0;

}

console.log(enemigoCercano( ["0000000", "0001000", "0000000", "0000000", "0000000", "2000000", "0000000"] ));
