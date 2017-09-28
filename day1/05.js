//每个成员就是一帧
var frames = [];
var fps = 5;
var fs = require('fs');

for( var i=0;i<7;i++){
    frames[frames.length] = fs.readFileSync(path,options);  //同步读取
}
exit();
//当前显示哪一帧
var current = 0;
var render = ()=>{
    //将当前控制台清空
    /*var height = process.stdout.getWindowSize()[1];
    for(var i=0;i<height;i++){
        process.stdout.write('\n');
    }*/
    process.stdout.write('\033[2J');
    process.stdout.write('\033[2f');
    //输出新内容
    if( current === frames.length){ current = 0; }
    process.stdout.write(frames[current++]);
}

setInterval(render, 1000 / fps);