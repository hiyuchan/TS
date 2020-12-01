//直接使用export 导出方法

export var baseUrl = 'xxxxx'

export function getdata(): any[]{
    console.log('直接用export导出');

    var list = [
        {title:'aaaa',desc:'wqreqw'},
        {title:'aaaa',desc:'wqreqw'},
    ];
    return list;
}

function save():void{
    console.log('统一导出多个模块');
}
function update():void{
    console.log('统一导出多个模块');
}

export {save,update}

// 只暴露一个方法，可用默认导出

export default function setData():void{
    console.log('这是默认导出方法')
}