//nodejs 测试
var argv = process.argv.slice(2);

switch(argv[0]){ 
    case 'init':
    console.log('你需要init');
    break;
    case 'install':
    var installPackageName = argv[1];
    console.log('你在安装' + installPackageName);
    break;
    case 'uninstall':
    console.log('uninstall');
    break;
}
//console.log(argv.toString());