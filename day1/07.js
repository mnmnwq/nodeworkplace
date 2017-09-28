//1.如果函数需要回掉参数，一定实在参数的最后出现
/*function getFileAsync(path,callback){
    if(错误){
        callback( new Error ('XXX 错误'));
    }else{
        callback(null,data);
    }

}*/

//2.错误有限的回掉函数




function isEvenOrOdd(number,callback){
    if(typeof number === 'number'){
        if(number % 2){
            //技术
            callback(null,'当前传入的是奇数');
        }else{
            callback(null,'当前传入的是偶数');
        }
    }else{
        callback(new Error ('你传入的不是数字'))
    }
}

// 约定 将错误信息作为回掉的第一个参数
isEvenOrOdd(10,(error,data)=>{
    if(error) throw error;  //throw 之后会结束
    console.log(data);
});