//控制台登陆

//接收用户的输入
/*
process.stdin.setEncoding('utf8');

process.stdin.on('readable',()=>{
    var chunk = process.stdin.read();
    if(chunk !== null){
        process.stdout.write(`data:${chunk}`);
    }
});
*/
var q = '请输入用户名：';
var users = {
    'admin':'123',
    'user1':'321',
    'user2':'213'
};

//输出第一个问题
process.stdout.write(q + '\n');
//接收用户输入
//var res = process.stdin.readline();  // 用户操作无状态

process.stdin.on('data',(input)=>{
    //获取类型
    //process.stdout.write(typeof input);
    //输入的字符最后肯定是一个回车符
    input = input.toString().trim();
    //获取一个键值对集合中所有的键
    if(Object.keys(users).indexOf(input) === -1){
        //用户名不存在
        process.stdout.write('用户名不存在' + '\n');
        process.stdout.write(q + '\n');
    }else{
        //存在用户
        //var pwd = users[input];
        process.stdout.write('请输入密码：' + '\n');
    }
});

/*
process.stdin.on('data',(data)=>{
    process.stdout.write(data);

});
*/